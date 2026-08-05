# Architecture

Approva is composed of three cooperating layers plus a settlement network. Each layer has a single, narrow responsibility so that no one component needs to be fully trusted on its own.

```
Your Application  →  Approva SDK  →  Trusted Device  →  Blockchain Network
 (Marketplace,        (Web SDK +      (Approva Mobile     (settlement +
  SaaS, AI App)        Server SDK)     App)                confirmation)
```

## Components

### 1. Your Application
Any marketplace, SaaS product, or AI app that needs a user to approve an action. It never handles private keys or biometric data directly — it only creates authorization requests and reacts to their outcome.

### 2. Approva SDK (Web + Server)
The integration surface. The **Web SDK** runs in the browser and is responsible for pairing a trusted device to a session. The **Server SDK** runs on your backend and is responsible for creating authorization requests, managing sessions at scale, and submitting the signed result to the blockchain once approval is received.

### 3. Trusted Device (Approva Mobile App)
The device the user already trusts — their phone. It receives authorization requests, renders them in plain language (action, amount, recipient), and captures a biometric approval or rejection. The mobile app is the only component that ever prompts for biometrics or holds signing material.

### 4. Blockchain Network
The settlement layer. Once a request is approved, the signed transaction is submitted to the configured blockchain network. Confirmation flows back through the Server SDK to your application, and the approval itself is recorded permanently on-chain.

## Data flow, end to end

1. Your application calls the Server SDK to create an authorization request (action, amount, reference).
2. Approva delivers the request to the user's paired trusted device.
3. The user reviews the request on their device and approves or rejects it, authenticated by biometrics.
4. On approval, the mobile app signs the result and returns it to Approva.
5. The Server SDK submits the signed transaction to the blockchain.
6. Your application receives a confirmation event and continues its own logic (e.g., delivering the purchased item).

## Trust boundaries

Approva is designed so that compromising any single layer isn't sufficient to move funds or approve an action:

- **Your application** can request approvals but cannot approve its own requests.
- **The Server SDK** can relay requests and submit signed transactions, but cannot generate a valid signature — only the paired trusted device can do that.
- **The trusted device** requires biometric authentication for every approval; a stolen or unlocked phone alone is not enough.
- **The blockchain** provides the final, tamper-evident record — nothing is considered final until it's settled on-chain.

## Session model

A trusted device is paired to a session once (see [Connection Flow](./03-connection-flow.md)). That session is:

- **Scoped** — limited to what it's allowed to approve.
- **Persistent** — the user isn't asked to re-pair for every request.
- **Revocable** — instantly, from any connected application.

This session is what makes repeated approvals low-friction without weakening the security of any individual approval.
