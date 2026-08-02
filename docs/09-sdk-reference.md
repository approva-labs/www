# SDK Reference

API-level reference for `@approva/web`, `@approva/server`, and the events both emit. For the conceptual split between them, see [SDK Responsibilities](./05-sdk-responsibilities.md).

---

## `@approva/web`

### `new Approva(config)`

```javascript
import { Approva } from "@approva/web";

const approva = new Approva({
  clientId: "YOUR_CLIENT_ID"
});
```

| Option | Type | Required | Description |
|---|---|---|---|
| `clientId` | `string` | yes | Identifies your application to Approva. |

### `approva.connect()`

Opens the pairing flow. On mobile web, this triggers a deep link straight into the Approva app. On desktop web, it renders a QR code for the user to scan. Returns a promise that resolves once pairing completes.

```javascript
await approva.connect();
```

### `approva.authorize(request)`

Creates an authorization request and returns a promise that resolves once the user approves or rejects it.

```javascript
const result = await approva.authorize({
  action: "purchase",
  amount: "25.00",
  currency: "USD",
  reference: "order_123"
});
```

| Field | Type | Required | Description |
|---|---|---|---|
| `action` | `string` | yes | Short identifier for what's being approved (e.g. `"purchase"`, `"payout"`). |
| `amount` | `string` | no | Numeric amount as a string, shown to the user. |
| `currency` | `string` | no | Currency or asset code (e.g. `"USD"`, `"USDC"`). |
| `reference` | `string` | no | Your own identifier for this request (order ID, invoice number, etc). |

**Resolves with:**

```typescript
{
  status: "approved" | "rejected",
  signedPayload?: string,   // present when approved
  sessionId: string,
  reason?: string           // present when rejected, if the user gave one
}
```

### `approva.on(event, handler)`

Subscribes to session and authorization events.

```javascript
approva.on("connected", () => { /* pairing completed */ });
approva.on("approved", (result) => { /* ... */ });
approva.on("rejected", (reason) => { /* ... */ });
approva.on("revoked", () => { /* session was revoked */ });
```

### `approva.disconnect()`

Revokes the current session from the application side.

---

## `@approva/server`

### `new ApprovaServer(config)`

```javascript
import { ApprovaServer } from "@approva/server";

const approva = new ApprovaServer({
  apiKey: process.env.APPROVA_API_KEY
});
```

| Option | Type | Required | Description |
|---|---|---|---|
| `apiKey` | `string` | yes | Server-side API key. Never expose this in client code. |

### `approva.authorize(request)`

Same shape as the Web SDK's `authorize()`, but callable from backend contexts with no browser present — including scheduled jobs, webhooks, and AI agent processes.

```javascript
const auth = await approva.authorize({
  action: "purchase",
  amount: "25",
  reference: "premium-theme"
});
```

### `approva.getSession(sessionId)`

Retrieves the current state of a session (connected, pending, revoked).

### `approva.revokeSession(sessionId)`

Revokes a session server-side — useful for admin tooling or account security flows.

### `approva.on(event, handler)`

Same event names as the Web SDK (`approved`, `rejected`, `connected`, `revoked`), for backends that want to react to outcomes directly rather than polling.

---

## Error handling

Both SDKs throw on malformed requests (missing `action`, invalid `amount`) rather than silently failing. Network or timeout errors reject the returned promise; a rejected *approval* (the user tapped Reject) is not an error — it resolves normally with `status: "rejected"`.

```javascript
try {
  const result = await approva.authorize({ action: "purchase", amount: "25" });
  if (result.status === "approved") {
    // proceed
  } else {
    // user rejected — not an error, just a decision
  }
} catch (err) {
  // network/timeout/validation failure
}
```

## Rate limits and timeouts

Authorization requests time out if left unanswered — treat a timeout the same as a rejection in your application logic, since an unanswered request should never be assumed approved.
