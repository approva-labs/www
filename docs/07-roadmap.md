# Roadmap

Approva's current release covers the core approval loop: connect a trusted device once, request approval, receive a signed and settled result. This document covers what's shipped and what's coming next.

## Building now

- **Web SDK** — connect trusted device, create authorization requests, listen for events
- **Server SDK** — manage sessions, send authorization requests, submit transactions, receive confirmations
- **Mobile App (iOS / Android)** — deep-link or QR pairing, plain-language request review, biometric approval
- **Blockchain settlement** — signed approvals submitted and confirmed on-chain
- **Core use cases** — marketplace checkout, AI credit purchases, membership upgrades, payments

## Planned next

### AI Agent Approval
Purpose-built support for approving actions performed by AI agents before they execute on a user's behalf — including richer context in the approval request (what the agent is trying to do and why) so approvals stay meaningful even as more of the initiating "user" is software rather than a person clicking a button.

### Team Approval
Support for requiring **multiple** people to approve sensitive actions and transactions, rather than a single trusted device — for organizations where no individual should be able to unilaterally authorize high-stakes actions.

### Approval Policies
Rule-based control over how approvals behave — for example, auto-approving below a threshold amount, requiring team approval above another threshold, or scoping what a given application is allowed to ever request. This turns the manual "review every request" model into a configurable policy layer for teams that need it.

## Exploring

Longer-term areas under consideration, not yet committed to a release:

- **Expanded network support** — additional blockchain networks, for teams that need multi-chain settlement
- **Delegated, scoped agent sessions** — narrower, time-boxed authority for autonomous agents that reduces how often a human needs to be in the loop for low-risk, high-frequency actions, without removing the checkpoint for anything consequential
- **Deeper audit tooling** — exportable, queryable approval histories for compliance and reporting use cases

## How this roadmap is prioritized

Approva's guiding principle is that new capabilities should make the human checkpoint **more meaningful**, not remove it. Features like Approval Policies exist to reduce noise from low-stakes requests — not to quietly expand what can happen without a person's awareness.
