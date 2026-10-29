/**
 * ChargeDossier Deterministic Scoring Engine Benchmark
 * 
 * Measures execution latency, statistical variance, and deterministic score stability
 * across the 4 synthetic benchmark dispute profiles.
 * 
 * Run with: node tests/benchmark.js
 */

import { performance } from "node:perf_hooks";
import { auditDispute } from "../src/engine.js";
import { INITIAL_DISPUTES } from "../src/data/disputes.js";

function runBenchmark(iterations = 1000, warmupIterations = 100) {
  console.log("================================================================================");
  console.log("CHARGEDOSSIER DETERMINISTIC RULES ENGINE PERFORMANCE & STABILITY BENCHMARK");
  console.log("================================================================================");
  console.log(`Environment: Node.js ${process.version} | Platform: ${process.platform} (${process.arch})`);
  console.log(`Iterations: ${iterations.toLocaleString()} per dispute (${(iterations * INITIAL_DISPUTES.length).toLocaleString()} total audits)`);
  console.log(`Warmup runs: ${warmupIterations.toLocaleString()}\n`);

  // 1. Warmup to allow V8 JIT optimization
  for (let w = 0; w < warmupIterations; w++) {
    for (const d of INITIAL_DISPUTES) {
      auditDispute(d);
    }
  }

  // 2. Measure Execution Latency per dispute
  const disputeResults = {};

  for (const dispute of INITIAL_DISPUTES) {
    const timesMs = [];
    const scores = [];

    for (let i = 0; i < iterations; i++) {
      const t0 = performance.now();
      const audit = auditDispute(dispute);
      const t1 = performance.now();
      timesMs.push(t1 - t0);
      scores.push(audit.qualityScore);
    }

    const totalTimeMs = timesMs.reduce((a, b) => a + b, 0);
    const meanMs = totalTimeMs / iterations;
    const meanUs = meanMs * 1000;

    // Variance and standard deviation of latency
    const varianceMs = timesMs.reduce((sum, t) => sum + Math.pow(t - meanMs, 2), 0) / iterations;
    const stdDevMs = Math.sqrt(varianceMs);

    // Min and Max
    const minMs = Math.min(...timesMs);
    const maxMs = Math.max(...timesMs);

    // Score stability check
    const firstScore = scores[0];
    const scoreMatches = scores.every(s => s === firstScore);
    const scoreVariance = scores.reduce((sum, s) => sum + Math.pow(s - firstScore, 2), 0) / iterations;

    disputeResults[dispute.id] = {
      id: dispute.id,
      amountUSD: dispute.amountUSD,
      reasonCode: dispute.reasonCode,
      score: firstScore,
      meanMs,
      meanUs,
      stdDevMs,
      minMs,
      maxMs,
      scoreMatches,
      scoreVariance
    };
  }

  // 3. Print Results Matrix
  console.log("--- 1. LATENCY BENCHMARK RESULTS (1,000 Iterations) ---");
  console.log("Dispute ID | Reason Code | Score | Mean Latency (ms) | Mean Latency (µs) | StdDev (ms) | Min (ms) | Max (ms)");
  console.log("-----------+-------------+-------+-------------------+-------------------+-------------+----------+---------");

  let grandTotalMeanMs = 0;
  for (const id of Object.keys(disputeResults)) {
    const r = disputeResults[id];
    grandTotalMeanMs += r.meanMs;
    console.log(
      `${r.id.padEnd(10)} | ` +
      `${r.reasonCode.padEnd(11)} | ` +
      `${r.score.toString().padStart(5)} | ` +
      `${r.meanMs.toFixed(5).padStart(17)} | ` +
      `${r.meanUs.toFixed(2).padStart(17)} | ` +
      `${r.stdDevMs.toFixed(5).padStart(11)} | ` +
      `${r.minMs.toFixed(5).padStart(8)} | ` +
      `${r.maxMs.toFixed(5).padStart(8)}`
    );
  }

  const grandAverageMeanMs = grandTotalMeanMs / INITIAL_DISPUTES.length;
  console.log("-----------+-------------+-------+-------------------+-------------------+-------------+----------+---------");
  console.log(`Aggregate Mean Execution Latency: ${grandAverageMeanMs.toFixed(5)} ms (${(grandAverageMeanMs * 1000).toFixed(2)} µs per audit)\n`);

  // 4. Deterministic Score Stability Check (100 Sequential Audit Cycles)
  console.log("--- 2. DETERMINISTIC SCORE STABILITY CHECK (100 Sequential Cycles) ---");
  let allStable = true;
  for (const id of Object.keys(disputeResults)) {
    const r = disputeResults[id];
    const statusStr = r.scoreMatches ? "PERFECT DETERMINISM (Variance = 0.00)" : "NON-DETERMINISTIC DRIFT DETECTED";
    console.log(`${r.id}: Score = ${r.score}/100 across ${iterations} runs -> Score Variance = ${r.scoreVariance.toFixed(4)} [${statusStr}]`);
    if (!r.scoreMatches) allStable = false;
  }

  console.log("\n================================================================================");
  console.log(`STABILITY VERDICT: ${allStable ? "PASS (100% Deterministic Reproducibility)" : "FAIL"}`);
  console.log("================================================================================\n");

  return {
    grandAverageMeanMs,
    disputeResults,
    allStable
  };
}

runBenchmark(1000, 100);
