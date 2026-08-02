# Authorization Flow

Once a trusted device is connected (see [Connection Flow](./03-connection-flow.md)), your application can request approval for specific actions. This is the core loop Approva exists to support.

## Overview

```
Your App  →  Approva Server SDK  →  Trusted Device  →  Blockchain  →  Your App
 (create        (delivers, waits       (review &         (settle    (confirmed)
  request)        for approval)          approve)          record)
```

## Step by step

**1. Create an authorization request**
Your backend calls `approva.authorize()` with the details of the action:

```javascript
const result = await approva.authorize({
  action: "purchase",
  amount: "25.00",
  currency: "USD",
  reference: "order_123"
});
```

**2. Request is delivered to the device**
Approva's Server SDK routes the request to the user's paired trusted device. This typically takes well under a second.

**3. User reviews the request**
The Approva mobile app displays the request in plain language — action, amount, and recipient/reference — never as raw transaction data. The user can **Approve** or **Reject**.

**4. Biometric confirmation**
Approving requires the device's biometric authentication (Face ID, Touch ID, or platform equivalent). A tap alone is not sufficient — see [Security Model](./08-security-model.md).

**5. Signed result returned**
On approval, the mobile app signs the result and returns it to Approva. On rejection, no signature is produced and your application is notified of the rejection with a reason if one was given.

**6. Settlement**
The Server SDK submits the signed transaction to the blockchain. This is what actually moves value or records the action on-chain.

**7. Confirmation**
Your application receives a real-time event once the transaction is confirmed, and can continue its own logic — e.g., delivering a purchased item, activating a plan, or releasing a payout.

## Listening for outcomes

```javascript
approva.on("approved", (result) => {
  // result.signedPayload, result.sessionId, result.status
  handleSuccess(result);
});

approva.on("rejected", (reason) => {
  handleRejection(reason);
});
```

## Timing

A typical end-to-end approval — from request creation to your application receiving confirmation — completes in a few seconds, the large majority of which is the human review step itself, not network or infrastructure latency.

## Design intent: one checkpoint, not friction

The authorization flow is deliberately narrow: one clear request, one human decision, one settlement. Approva does not batch multiple unrelated actions into a single approval, and does not allow an application to pre-approve future requests on a user's behalf — every distinct action gets its own checkpoint.
