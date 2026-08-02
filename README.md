# Approva

Approva is open-source authorization infrastructure that puts a human checkpoint between an application's intent to act and the moment that action actually executes. An application — a marketplace, a SaaS product, or an AI agent — requests approval for a specific action (a purchase, a payout, a credential change). Approva delivers that request to a device the user already trusts, the user reviews it in plain language, and Approva submits the signed result to the blockchain.

The core idea is simple: **applications should be able to act on a user's behalf, but never without a checkpoint the user controls.**

This repository contains the Approva marketing site (`www`) — the React + Tailwind app deployed at the project's public URL — along with the full technical documentation and white paper.

## Why it exists

Two trends are colliding:

1. **Autonomous software is holding budgets.** AI agents, scheduled jobs, and background workers increasingly need to spend money or take consequential actions without a person sitting at a keyboard.
2. **Users still want the final word.** Trust in autonomous systems is earned incrementally. A visible, low-friction approval step — not a blanket grant of authority — is what makes people comfortable letting software act for them.

Approva exists to make that checkpoint cheap to build correctly. Instead of every team inventing its own approval UX, session model, and signing flow, Approva provides the SDKs, the mobile app, and the protocol.

## Who it's for

- **Marketplaces and SaaS products** that need a lightweight way to confirm purchases, plan upgrades, or payouts without building a custom auth flow.
- **AI agent builders** who need a human-in-the-loop primitive before an agent is allowed to move money or take an irreversible action.
- **Platforms that want on-chain settlement** — approvals recorded with a permanent, auditable record.

## The three layers

| Layer | Runs where | Responsibility |
|---|---|---|
| **Web SDK** | Browser, inside your application | Connects a trusted device, creates authorization requests, listens for results |
| **Server SDK** | Your backend | Manages sessions, sends authorization requests, submits signed transactions, receives confirmations |
| **Mobile App** | The user's phone | Pairs with your app, displays requests in plain language, captures biometric approval |

These three layers are covered in detail in [Architecture](./docs/02-architecture.md).

## Design principles

- **One approval habit, everywhere.** Whether the request comes from a marketplace checkout or an AI agent's purchase, the user reviews and approves the same way.
- **Nothing moves without a signature.** Approva doesn't execute on the user's behalf — it collects an authenticated approval and submits exactly what was approved.
- **Open source, self-hostable.** The protocol and SDKs are open. Teams can self-host or use Approva's hosted infrastructure.
- **Blockchain-settled.** Approvals settle on-chain, giving every action a permanent, verifiable record.

## Documentation

- [Architecture](./docs/02-architecture.md) — how the three layers fit together
- [Connection Flow](./docs/03-connection-flow.md) — pairing a trusted device (deep link on mobile, QR code on desktop)
- [Authorization Flow](./docs/04-authorization-flow.md) — requesting and approving a transaction
- [SDK Responsibilities](./docs/05-sdk-responsibilities.md) — what each SDK owns, and why
- [SDK Reference](./docs/09-sdk-reference.md) — API-level documentation
- [Blockchain Integration](./docs/06-blockchain-integration.md) — settlement layer and network requirements
- [Security Model](./docs/08-security-model.md) — how approvals are secured
- [Roadmap](./docs/07-roadmap.md) — what's shipped and what's coming
- [White Paper](./WHITEPAPER.md) — the long-form case for human-checkpointed automation

## Development

This is a Vite + React + Tailwind CSS project.

```bash
npm install
npm run dev       # start dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
```

### Structure

```
docs/                          technical documentation
WHITEPAPER.md                  long-form white paper
tailwind.config.js             design tokens (colors, shadows, fonts)
src/
  main.jsx                     entry point
  App.jsx                      assembles all sections
  index.css                    Tailwind directives + a small @layer for bespoke effects
  components/
    Button.jsx                 shared primary/outline button
    Nav.jsx
    Hero.jsx
    HowItWorks.jsx
    SecurityStrip.jsx
    ComingSoon.jsx
    BuiltForDevelopers.jsx
    MarketplaceExample.jsx
    CodeIntegration.jsx
    FinalCTA.jsx
    Footer.jsx
  hooks/
    useExternalLink.ts         opens Docs/Whitepaper/GitHub links in a new tab
```
