# Security Model

Approva exists to sit between a request and a signature. That job only works if the layer itself is provably safe. This document describes the security properties Approva is built on.

## Threat model, in short

Approva assumes:
- Your application or backend could be compromised.
- A network request could be intercepted or replayed.
- A user's phone could be lost, stolen, or left unlocked.

Under each of these conditions, Approva is designed so that **no single point of failure is sufficient to move funds or complete an action without the legitimate user's explicit, biometric-confirmed approval.**

## Core protections

### Biometric-backed signing
Every approval requires Face ID, Touch ID, or the platform-equivalent device biometric — not just a tap on "Approve." This means a stolen or unlocked phone alone cannot approve a transaction; the biometric check happens at the moment of signing, on-device.

### Scoped, revocable sessions
A trusted-device session is scoped to what it's allowed to approve for a given application — it is not a blanket grant of authority. Sessions can be revoked instantly from any connected application or from the Approva mobile app directly, with no standing access left open after revocation.

### On-chain audit trail
Every approval and rejection is timestamped, and approved transactions are settled on-chain. This produces a permanent, independently verifiable record — one that doesn't depend on trusting Approva's own logs after the fact. See [Blockchain Integration](./06-blockchain-integration.md).

### No signature without the trusted device
As covered in [SDK Responsibilities](./05-sdk-responsibilities.md), neither your application nor Approva's server infrastructure holds signing material capable of completing a transaction. Only the paired trusted device can produce a valid signature, and only in response to a specific, user-reviewed request.

### Plain-language requests
Authorization requests are rendered in the mobile app as action, amount, and recipient — not raw transaction payloads. This is a deliberate security property, not just a UX choice: users can only meaningfully consent to what they can understand.

## What Approva does not protect against

Being direct about limits matters as much as stating guarantees:

- **A user approving a request they don't actually understand or trust.** Approva makes requests legible; it cannot guarantee a user reads carefully before tapping Approve.
- **Compromise of the physical device itself, unlocked and with biometrics bypassed at the OS level.** Approva relies on the platform's own biometric security guarantees.
- **Social engineering of the end user** into approving something they wouldn't otherwise.

## Reporting a vulnerability

Security issues should be reported through the process documented in the project's GitHub repository rather than filed as public issues. See [GitHub](https://github.com) for current disclosure guidelines.
