# Blockchain Integration

Approva settles approved transactions on a public blockchain. This document explains what that means in practice and what properties Approva's settlement layer depends on — without tying the architecture to any single network.

## Why settlement is on-chain at all

Approva could, in principle, just log approvals in its own database. The reason it doesn't:

- **Independent verifiability.** A transaction settled on a public ledger can be verified by anyone with the transaction reference — Approva does not need to be trusted as the sole record-keeper after the fact.
- **Tamper resistance.** Once confirmed, the record isn't something Approva, your application, or any single party can quietly rewrite.
- **A real audit trail.** This is what backs the guarantee described in [Security Model](./08-security-model.md) — the record of what was approved exists independently of Approva's continued good behavior.

## What Approva needs from a settlement network

Approva's settlement layer is deliberately abstracted behind the Server SDK so that the network underneath it is a deployment choice, not an architectural one. Whatever network is configured, it needs to provide:

- **Fast, low-cost finality.** The human review step should be the slowest part of the approval flow — not the network. A settlement layer with multi-minute confirmation times or high fees works against the low-friction goal described in [Authorization Flow](./04-authorization-flow.md).
- **Native or straightforward asset support.** Approval requests carry a `currency` field (see [SDK Reference](./09-sdk-reference.md)); the settlement layer needs to represent that unit — natively issued assets, fiat-backed stablecoins, or an equivalent — without requiring a bespoke token layer for every deployment.
- **A deterministic transaction model.** Approva constructs a transaction that reflects exactly what was approved (action, amount, destination) and needs that transaction's meaning to be unambiguous once signed — not dependent on additional off-chain interpretation.

## How signing works

Approva's Server SDK constructs the transaction from the authorization request. The trusted device (Mobile App) signs it locally, using key material that never leaves the device. The signed result is returned to the Server SDK, which submits it to the configured network — Approva's own infrastructure never holds a signing key capable of authorizing a transaction on its own. This is covered in more detail in [Architecture](./02-architecture.md).

## Confirmation and finality

Once submitted, Approva listens for the transaction's confirmation and relays that back to your application via the event listeners described in [Authorization Flow](./04-authorization-flow.md). "Confirmed" in Approva is meant to reliably mean "settled," not "pending" — which is part of why finality time is a real constraint on which networks are a good fit, not just an implementation detail.

## Network configuration

Which network Approva settles on is a configuration choice made at deployment time, with testnet/mainnet-equivalent environments supported for development versus production use. Because the settlement layer is abstracted behind the Server SDK's `authorize()` call, application code does not need to change based on which network is configured underneath it. See [Roadmap](./07-roadmap.md) for planned work on supporting more than one settlement network per deployment.
