/**
 * ChargeDossier Local HTTP Server & REST API
 * 
 * Zero external dependencies. Uses Node.js native http, fs, path, and url modules.
 * Start with: npm start or node server.js
 */

import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { DisputeStateManager } from "./src/state.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3000;

const stateManager = new DisputeStateManager();

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon"
};

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  res.end(JSON.stringify(data, null, 2));
}

function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", chunk => {
      body += chunk;
      if (body.length > 1e6) {
        req.destroy();
        reject(new Error("Request body too large"));
      }
    });
    req.on("end", () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(new Error("Malformed JSON"));
      }
    });
    req.on("error", reject);
  });
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  // Handle CORS preflight
  if (method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    });
    return res.end();
  }

  // ==========================================
  // REST API ROUTING
  // ==========================================

  try {
    // 1. GET /api/disputes -> List all disputes
    if (method === "GET" && pathname === "/api/disputes") {
      const list = stateManager.listDisputes();
      return sendJson(res, 200, { success: true, count: list.length, disputes: list });
    }

    // 2. GET /api/disputes/:id -> Get dispute details
    const getMatch = pathname.match(/^\/api\/disputes\/([A-Za-z0-9_-]+)$/);
    if (method === "GET" && getMatch) {
      const id = getMatch[1];
      const dispute = stateManager.getDispute(id);
      return sendJson(res, 200, { success: true, dispute });
    }

    // 3. POST /api/disputes/:id/audit -> Run audit
    const auditMatch = pathname.match(/^\/api\/disputes\/([A-Za-z0-9_-]+)\/audit$/);
    if (method === "POST" && auditMatch) {
      const id = auditMatch[1];
      const result = stateManager.auditDispute(id);
      return sendJson(res, 200, { success: true, ...result });
    }

    // 4. POST /api/disputes/:id/dossier -> Generate structured dossier
    const dossierMatch = pathname.match(/^\/api\/disputes\/([A-Za-z0-9_-]+)\/dossier$/);
    if (method === "POST" && dossierMatch) {
      const id = dossierMatch[1];
      const dossier = stateManager.generateDossier(id);
      return sendJson(res, 200, { success: true, dossier });
    }

    // 5. POST /api/disputes/:id/fix -> Interactive remediation
    const fixMatch = pathname.match(/^\/api\/disputes\/([A-Za-z0-9_-]+)\/fix$/);
    if (method === "POST" && fixMatch) {
      const id = fixMatch[1];
      const body = await parseJsonBody(req);
      const result = stateManager.attachFix(id, body);
      return sendJson(res, 200, { success: true, ...result });
    }

    // 6. POST /api/disputes/:id/approve -> Explicit approval
    const approveMatch = pathname.match(/^\/api\/disputes\/([A-Za-z0-9_-]+)\/approve$/);
    if (method === "POST" && approveMatch) {
      const id = approveMatch[1];
      const body = await parseJsonBody(req);
      const result = stateManager.approveDossier(id, body.notes);
      return sendJson(res, 200, { success: true, ...result });
    }

    // 7. POST /api/disputes/:id/reject -> Explicit rejection
    const rejectMatch = pathname.match(/^\/api\/disputes\/([A-Za-z0-9_-]+)\/reject$/);
    if (method === "POST" && rejectMatch) {
      const id = rejectMatch[1];
      const body = await parseJsonBody(req);
      const result = stateManager.rejectDossier(id, body.reason);
      return sendJson(res, 200, { success: true, ...result });
    }

    // 8. POST /api/reset -> Reset synthetic dataset
    if (method === "POST" && pathname === "/api/reset") {
      const result = stateManager.reset();
      return sendJson(res, 200, { success: true, ...result });
    }
  } catch (apiError) {
    return sendJson(res, 400, { success: false, error: apiError.message });
  }

  // ==========================================
  // STATIC ASSETS ROUTING
  // ==========================================

  let absolutePath;
  if (pathname.startsWith("/src/")) {
    const safeSrcPath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, "").replace(/^[\/\\]/, "");
    absolutePath = path.join(__dirname, safeSrcPath);
  } else {
    let filePath = pathname === "/" ? "/index.html" : pathname;
    const safePath = path.normalize(filePath).replace(/^(\.\.[\/\\])+/, "").replace(/^[\/\\]/, "");
    const rootCandidate = path.join(__dirname, safePath);
    const publicCandidate = path.join(__dirname, "public", safePath);
    absolutePath = fs.existsSync(rootCandidate) ? rootCandidate : publicCandidate;
  }

  fs.stat(absolutePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("404 Not Found");
    }

    const ext = path.extname(absolutePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    res.writeHead(200, { "Content-Type": contentType });
    const stream = fs.createReadStream(absolutePath);
    stream.pipe(res);
  });
});

const isDirectRun = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isDirectRun) {
  server.listen(PORT, () => {
    console.log(`[ChargeDossier Server] Running at http://localhost:${PORT}`);
    console.log(`[Synthetic Sandbox] Serving 4 test dispute records with deterministic rules engine.`);
  });
}

export { server, stateManager };
