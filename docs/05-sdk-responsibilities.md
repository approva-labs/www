# SDK Responsibilities

Approva ships three SDKs. Each has a distinct, narrow job — this document defines the boundaries so integrators know which SDK owns which part of the flow. For method-level detail, see [SDK Reference](./09-sdk-reference.md).

## Web SDK (`@approva/web`)

**Runs in:** the browser, inside your application
**Language:** JavaScript / TypeScript

Responsible for:
- Initiating device pairing (`connect()`)
- Creating authorization requests from client-side contexts
- Listening for approval/rejection events in real time
- Exposing session state to your front end (connected, pending, revoked)

Not responsible for:
- Holding signing keys or biometric data
- Submitting transactions directly to the blockchain (that's the Server SDK's job when a backend is present)

## Server SDK (`@approva/server`)

**Runs in:** your backend
**Language:** Node.js / TypeScript

Responsible for:
- Managing trusted sessions at scale, server-side
- Sending authorization requests on behalf of your application (including from background jobs, cron tasks, or AI agent processes with no user actively in a browser)
- Submitting signed transactions to the blockchain once approved
- Receiving and relaying confirmations back to your application layer

Not responsible for:
- Rendering the approval UI (that's the mobile app)
- Making the approval decision — the Server SDK never approves on the user's behalf

## Mobile App (Approva App — iOS / Android)

**Runs on:** the user's trusted device
**Framework:** React Native

Responsible for:
- Pairing with applications via deep link (same-device, mobile web) or QR code (cross-device, desktop web)
- Displaying authorization requests in plain, non-technical language
- Capturing biometric-authenticated approval or rejection
- Signing approved requests locally, on-device

Not responsible for:
- Storing application business logic
- Submitting transactions to the blockchain directly (it returns a signed result to Approva's infrastructure, which handles submission)

## Why the split matters

No single SDK can complete a transaction on its own:

- The **Web/Server SDK** can request and relay, but cannot sign.
- The **Mobile App** can sign, but only in response to a specific request, and only with biometric confirmation.

This separation is what makes it structurally difficult for a compromised application or backend to move funds without the user's device — the signature can only ever originate from the trusted device itself.

## Choosing which SDK to integrate

| If your application... | Use |
|---|---|
| Runs entirely client-side (e.g., a static web app) | Web SDK |
| Has a backend that needs to request approvals on a schedule, from a webhook, or on behalf of an AI agent | Server SDK (often alongside Web SDK for the pairing step) |
| Is the trusted device itself | You don't integrate the Mobile App SDK — end users install the Approva app |

Most production integrations use **Web SDK for pairing** and **Server SDK for everything after** — see [Connection Flow](./03-connection-flow.md) and [Authorization Flow](./04-authorization-flow.md).
