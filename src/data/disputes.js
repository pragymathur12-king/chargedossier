/**
 * ChargeDossier Synthetic Dispute Benchmark Dataset
 * 
 * Strict synthetic data modeling Mastercard reason codes (4837 Fraud & 4853 Merchandise).
 * Contains zero live PII, PANs, or proprietary merchant data.
 */

export const INITIAL_DISPUTES = [
  {
    id: "DSP-1049",
    category: "Consumer Electronics",
    productName: "AeroSound Pro Wireless ANC Headphones & MagSafe Dock",
    amountUSD: 349.00,
    currency: "USD",
    disputeDate: "2026-10-21",
    deadlineDate: "2026-11-04",
    network: "Mastercard",
    reasonCode: "4837",
    reasonDescription: "Fraud — No Cardholder Authorization",
    order: {
      orderId: "ORD-94812",
      orderDate: "2026-10-12T14:32:00Z",
      customerName: "Evan Vance",
      customerEmail: "evan.vance.synthetic@example.com",
      customerPhone: "+1 (555) 234-8901",
      billingAddress: {
        line1: "742 Evergreen Terrace",
        city: "Springfield",
        state: "OR",
        postalCode: "97477",
        country: "US"
      },
      shippingAddress: {
        line1: "742 Evergreen Terrace",
        city: "Springfield",
        state: "OR",
        postalCode: "97477",
        country: "US"
      },
      customerAccountTenureMonths: 14,
      priorSuccessfulOrders: 3
    },
    payment: {
      gateway: "Stripe",
      paymentIntentId: "pi_syn_902834192",
      cardBrand: "Mastercard",
      cardLast4: "4821",
      avsAddressMatch: "Y", // Full street match
      avsZipMatch: "Y",     // Full postal code match
      cvcCheck: "M",        // Match
      threeDSecure: "authenticated",
      customerIp: "198.51.100.42",
      customerIpLocation: "Springfield, OR, US"
    },
    fulfillment: {
      carrier: "FedEx",
      trackingNumber: "FX-902847192US",
      shipDate: "2026-10-13T09:15:00Z",
      deliveryDate: "2026-10-15T16:22:00Z",
      carrierStatus: "Delivered",
      deliveryAddressMatch: true,
      deliveredCity: "Springfield",
      deliveredState: "OR",
      deliveredPostalCode: "97477",
      signatureRequired: true,
      signatureCaptured: true,
      signedBy: "E. VANCE",
      photoProofOfDeliveryAttached: true
    },
    policy: {
      termsAcceptedAtCheckout: true,
      termsVersion: "2026-Q3-v1.4",
      termsAcceptedTimestamp: "2026-10-12T14:31:55Z",
      refundPolicyAttached: true
    },
    communications: {
      hasCustomerContact: true,
      records: [
        {
          timestamp: "2026-10-17T11:04:00Z",
          channel: "Zendesk Ticket #49102",
          author: "Evan Vance",
          summary: "Customer inquired about pairing second Bluetooth device with the dock. Support agent sent user guide PDF. Customer replied: 'Got it working, thank you!'"
        }
      ]
    },
    attachedEvidence: [
      { id: "EV-01", type: "PROOF_OF_DELIVERY", title: "FedEx Signature Delivery Slip (Signed: E. VANCE)", verified: true },
      { id: "EV-02", type: "ORDER_RECEIPT", title: "Shopify Verified Invoice #ORD-94812", verified: true },
      { id: "EV-03", type: "AVS_CVV_RECORD", title: "Stripe Gateway AVS/CVC Match Verification", verified: true },
      { id: "EV-04", type: "CUSTOMER_COMMUNICATION", title: "Zendesk Ticket #49102 Transcript (Usage Confirmation)", verified: true }
    ],
    state: "UNREVIEWED", // UNREVIEWED | AUDITED | APPROVED | REJECTED
    auditResult: null,
    reviewDecision: null
  },
  {
    id: "DSP-2081",
    category: "Specialty Appliances",
    productName: "BaristaCraft Precision Burr Coffee Grinder",
    amountUSD: 295.00,
    currency: "USD",
    disputeDate: "2026-10-23",
    deadlineDate: "2026-11-06",
    network: "Mastercard",
    reasonCode: "4853",
    reasonDescription: "Goods / Services Not Received",
    order: {
      orderId: "ORD-95330",
      orderDate: "2026-10-10T18:10:00Z",
      customerName: "Marcus Sterling",
      customerEmail: "m.sterling.synthetic@example.com",
      customerPhone: "+1 (555) 876-5432",
      billingAddress: {
        line1: "1200 Grand Ave Apt 4B",
        city: "Seattle",
        state: "WA",
        postalCode: "98101",
        country: "US"
      },
      shippingAddress: {
        line1: "1200 Grand Ave Apt 4B",
        city: "Seattle",
        state: "WA",
        postalCode: "98101",
        country: "US"
      },
      customerAccountTenureMonths: 1,
      priorSuccessfulOrders: 0
    },
    payment: {
      gateway: "Shopify Payments",
      paymentIntentId: "ch_syn_881923012",
      cardBrand: "Mastercard",
      cardLast4: "1190",
      avsAddressMatch: "Y",
      avsZipMatch: "Y",
      cvcCheck: "M",
      threeDSecure: "not_attempted",
      customerIp: "203.0.113.88",
      customerIpLocation: "Seattle, WA, US"
    },
    fulfillment: {
      carrier: "UPS",
      trackingNumber: "1Z9999999999999999",
      shipDate: "2026-10-11T12:00:00Z",
      deliveryDate: null,
      carrierStatus: "In Transit — Severe Weather Delay in Spokane Hub",
      deliveryAddressMatch: false,
      deliveredCity: null,
      deliveredState: null,
      deliveredPostalCode: null,
      signatureRequired: false,
      signatureCaptured: false,
      signedBy: null,
      photoProofOfDeliveryAttached: false
    },
    policy: {
      termsAcceptedAtCheckout: true,
      termsVersion: "2026-Q3-v1.4",
      termsAcceptedTimestamp: "2026-10-10T18:09:48Z",
      refundPolicyAttached: true
    },
    communications: {
      hasCustomerContact: true,
      records: [
        {
          timestamp: "2026-10-22T08:30:00Z",
          channel: "Customer Email",
          author: "Marcus Sterling",
          summary: "Customer emailed: 'Tracking has not moved in 9 days. Where is my grinder? I requested a refund yesterday.'"
        }
      ]
    },
    attachedEvidence: [
      { id: "EV-11", type: "ORDER_RECEIPT", title: "Shopify Order Invoice #ORD-95330", verified: true },
      { id: "EV-12", type: "TRACKING_LABEL", title: "UPS Shipping Label Generated Slip", verified: true }
    ],
    state: "UNREVIEWED",
    auditResult: null,
    reviewDecision: null
  },
  {
    id: "DSP-3312",
    category: "Office Furniture",
    productName: "ErgoLift Pro Motorized Standing Desk (Walnut / White)",
    amountUSD: 850.00,
    currency: "USD",
    disputeDate: "2026-10-24",
    deadlineDate: "2026-11-07",
    network: "Mastercard",
    reasonCode: "4837",
    reasonDescription: "Fraud — No Cardholder Authorization",
    order: {
      orderId: "ORD-96104",
      orderDate: "2026-10-14T21:40:00Z",
      customerName: "David K. Ross",
      customerEmail: "dross.corp.synthetic@example.com",
      customerPhone: "+1 (555) 432-1098",
      billingAddress: {
        line1: "300 Congress Ave Suite 1400",
        city: "Austin",
        state: "TX",
        postalCode: "78701",
        country: "US"
      },
      shippingAddress: {
        line1: "8200 NW 27th St Unit 102",
        city: "Doral",
        state: "FL",
        postalCode: "33178",
        country: "US"
      },
      customerAccountTenureMonths: 0,
      priorSuccessfulOrders: 0
    },
    payment: {
      gateway: "Stripe",
      paymentIntentId: "pi_syn_772109432",
      cardBrand: "Mastercard",
      cardLast4: "9902",
      avsAddressMatch: "N", // Mismatch on billing street
      avsZipMatch: "N",     // Mismatch on zip
      cvcCheck: "M",        // Match
      threeDSecure: "failed",
      customerIp: "198.51.100.199",
      customerIpLocation: "Miami, FL, US"
    },
    fulfillment: {
      carrier: "FreightDirect LTL",
      trackingNumber: "FDL-8820194US",
      shipDate: "2026-10-15T15:00:00Z",
      deliveryDate: "2026-10-18T10:14:00Z",
      carrierStatus: "Delivered",
      deliveryAddressMatch: true, // Matches shipping (FL), but NOT billing (TX)
      deliveredCity: "Doral",
      deliveredState: "FL",
      deliveredPostalCode: "33178",
      signatureRequired: true,
      signatureCaptured: true,
      signedBy: "BAY 4 WAREHOUSE FORWARDING",
      photoProofOfDeliveryAttached: true
    },
    policy: {
      termsAcceptedAtCheckout: true,
      termsVersion: "2026-Q3-v1.4",
      termsAcceptedTimestamp: "2026-10-14T21:39:50Z",
      refundPolicyAttached: false
    },
    communications: {
      hasCustomerContact: true,
      records: [
        {
          timestamp: "2026-10-23T14:10:00Z",
          channel: "Customer Inbound Phone Call / Support Ticket #49281",
          author: "David K. Ross (Austin, TX)",
          summary: "Cardholder called stating: 'Fraudulent charge on my statement. I live in Austin, Texas. I have never shipped any desk to Florida. Card has been canceled.'"
        }
      ]
    },
    attachedEvidence: [
      { id: "EV-21", type: "PROOF_OF_DELIVERY", title: "FreightDirect Bill of Lading (Signed: Bay 4 Forwarding)", verified: true },
      { id: "EV-22", type: "ORDER_RECEIPT", title: "Shopify Order Invoice #ORD-96104", verified: true }
    ],
    state: "UNREVIEWED",
    auditResult: null,
    reviewDecision: null
  },
  {
    id: "DSP-4190",
    category: "Home & Bedding",
    productName: "The Modern Modular Platform Bed Frame (King / Natural)",
    amountUSD: 1150.00,
    currency: "USD",
    disputeDate: "2026-10-25",
    deadlineDate: "2026-11-08",
    network: "Mastercard",
    reasonCode: "4853",
    reasonDescription: "Goods Not as Described / Defective Merchandise",
    order: {
      orderId: "ORD-96880",
      orderDate: "2026-10-08T11:20:00Z",
      customerName: "Sarah Jenkins",
      customerEmail: "sarah.j.synthetic@example.com",
      customerPhone: "+1 (555) 345-6789",
      billingAddress: {
        line1: "450 Oak Tree Lane",
        city: "Denver",
        state: "CO",
        postalCode: "80202",
        country: "US"
      },
      shippingAddress: {
        line1: "450 Oak Tree Lane",
        city: "Denver",
        state: "CO",
        postalCode: "80202",
        country: "US"
      },
      customerAccountTenureMonths: 8,
      priorSuccessfulOrders: 1
    },
    payment: {
      gateway: "Stripe",
      paymentIntentId: "pi_syn_661902834",
      cardBrand: "Mastercard",
      cardLast4: "3310",
      avsAddressMatch: "Y",
      avsZipMatch: "Y",
      cvcCheck: "M",
      threeDSecure: "authenticated",
      customerIp: "198.51.100.67",
      customerIpLocation: "Denver, CO, US"
    },
    fulfillment: {
      carrier: "FedEx Freight",
      trackingNumber: "FXF-77491028US",
      shipDate: "2026-10-09T14:00:00Z",
      deliveryDate: "2026-10-13T13:45:00Z",
      carrierStatus: "Delivered",
      deliveryAddressMatch: true,
      deliveredCity: "Denver",
      deliveredState: "CO",
      deliveredPostalCode: "80202",
      signatureRequired: true,
      signatureCaptured: true,
      signedBy: "SARAH JENKINS",
      photoProofOfDeliveryAttached: true
    },
    policy: {
      termsAcceptedAtCheckout: true,
      termsVersion: "2026-Q3-v1.4",
      termsAcceptedTimestamp: "2026-10-08T11:19:40Z",
      refundPolicyAttached: false // MISSING IN INITIAL STATE (Can be fixed in interactive demo!)
    },
    communications: {
      hasCustomerContact: true,
      records: [
        {
          timestamp: "2026-10-18T16:00:00Z",
          channel: "Zendesk Ticket #49310",
          author: "Sarah Jenkins",
          summary: "Customer reported: 'One of the king center support wooden slats has a hairline crack and 4 assembly screws were missing from the hardware pack.'"
        }
      ]
    },
    attachedEvidence: [
      { id: "EV-31", type: "PROOF_OF_DELIVERY", title: "FedEx Freight Electronic POD Slip (Signed: SARAH JENKINS)", verified: true },
      { id: "EV-32", type: "ORDER_RECEIPT", title: "Shopify Invoice #ORD-96880", verified: true }
    ],
    state: "UNREVIEWED",
    auditResult: null,
    reviewDecision: null
  }
];

export function getDisputeById(disputes, id) {
  return disputes.find(d => d.id === id) || null;
}

export function deepCloneDisputes(disputes = INITIAL_DISPUTES) {
  return JSON.parse(JSON.stringify(disputes));
}
