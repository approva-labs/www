# Approva: A Human Checkpoint for Machine Transactions

*A white paper on approval infrastructure for autonomous and semi-autonomous applications.*

## Abstract

Software is increasingly trusted to initiate financial and consequential actions on a person's behalf — subscription charges, marketplace purchases, and, increasingly, actions decided by AI agents rather than direct human input. This shift creates a gap: the systems making these decisions are getting faster and more autonomous, while the mechanisms for keeping a person meaningfully in control have not kept pace. Approva proposes a narrow, well-defined answer to this gap — a human checkpoint, implemented as open infrastructure, that any application can adopt without building its own approval system from scratch.

## 1. The problem

### 1.1 Autonomy is outpacing consent

Historically, a person authorized a transaction by directly performing it — entering a card number, clicking "Buy," signing a check. Authorization and action were the same event. As software has taken on more initiative — recurring billing, algorithmic trading, and now AI agents executing multi-step tasks — that fusion has broken apart. The action can now happen without a person's hands on the keyboard at the moment it occurs.

This is not inherently a problem. Automation that removes tedious manual steps is valuable. But when the thing being automated is *authorization itself*, rather than just execution, something important is lost: the moment where a person could have said no.

### 1.2 Existing approaches are either too weak or too heavy

Two patterns dominate today:

- **Blanket authorization** — a user grants an application (or an AI agent) standing permission to act, once, and the system is trusted indefinitely after that. This is fast but fragile: a single compromised credential or a single bad agent decision has unlimited blast radius.
- **Full manual re-authentication** — every sensitive action requires the user to re-enter credentials, re-confirm identity, or otherwise perform significant friction. This is safe but does not scale to the frequency of actions autonomous systems can generate, and users predictably route around friction that feels excessive.

Neither pattern is well-suited to a world where software might reasonably need to ask a person "is this okay?" dozens of times a day, quickly, without either exposing them to runaway risk or wearing them down into rubber-stamping everything.

### 1.3 What's actually needed

A workable approval layer needs three properties simultaneously:

1. **Low friction** — a single, fast action (a biometric tap), not a full re-authentication ceremony.
2. **Meaningful** — the user can see what they're approving in plain terms, so consent is real rather than habitual.
3. **Verifiable** — there is a permanent record of what was approved, by whom, and when — not just a log entry an application could quietly alter.

## 2. Design

### 2.1 Separation of request, approval, and settlement

Approva's architecture deliberately splits authorization into three parts, held by three different components, so that no single compromised component can complete a transaction alone:

- **Request** — created by the application (Web SDK / Server SDK). The application can ask, but cannot answer.
- **Approval** — granted only by the user's paired trusted device, gated by biometric authentication. The device can answer, but only in response to a specific request it displays in plain language.
- **Settlement** — recorded on a public blockchain, providing a permanent, independently verifiable record that doesn't rely on trusting Approva's own logs after the fact.

This separation is the core security property of the system: an attacker would need to compromise the application, the trusted device, *and* the settlement layer simultaneously to forge an approved transaction — not just one of the three.

### 2.2 One approval habit, regardless of source

Whether a request originates from a person clicking "Buy" in a marketplace or from an AI agent deciding to spend part of its allocated budget, it arrives at the user's device through the same interface, reviewed the same way, approved the same way. This uniformity matters for two reasons:

- **Users build one reliable mental model** of what an approval means, rather than a different trust posture per application.
- **The checkpoint doesn't quietly weaken** as more of the "requesting" side becomes software rather than a person — the human review step is structurally the same regardless of what's on the other end of the request.

### 2.3 Sessions, not standing grants

Connecting a trusted device once establishes a session — not a blanket grant. Sessions are scoped to what they're allowed to approve for a specific application, and are revocable instantly. This preserves the low-friction property (no re-pairing for every request) without reintroducing the blanket-authorization problem described in 1.2 — a session can be reviewed and revoked at any time, and its scope limits what it was ever able to approve in the first place.

### 2.4 Settlement as the source of truth

By recording approved actions on a public blockchain rather than solely in Approva's own database, the system avoids a specific failure mode common to centralized approval logs: a compromised or dishonest operator quietly altering the record after the fact. Once settled, an approval's existence and content can be verified by any party, independent of Approva's continued good behavior.

## 3. Implications for AI agents specifically

Much of the motivation for this work comes from a specific, near-term case: AI agents that are given budgets or purchasing authority and expected to act with limited supervision. Two failure modes are worth naming directly:

- **Under-supervision** — an agent is given broad standing authority (see 1.2) and a single flawed decision, prompt injection, or bug has unbounded consequences.
- **Over-supervision** — every agent action requires so much manual confirmation that the agent provides no real efficiency gain, and users learn to approve without reading.

Approva's approach — cheap, structured, individually-scoped approvals — is aimed at the middle path: agents can act frequently and independently on low-stakes decisions within a scoped session, while anything crossing into genuinely consequential territory still produces a specific, legible, individually-reviewed request. The goal is not to make automation slower; it's to make sure the speed of automation never outpaces a person's ability to notice when something has gone wrong.

## 4. Open questions and future work

This paper describes the architecture as implemented today, alongside areas still being actively developed (see [Roadmap](./docs/07-roadmap.md)):

- **Team and multi-party approval** — some decisions shouldn't rest on a single device or person; this requires additional coordination beyond the current single-approver model.
- **Approval policies** — rule-based auto-approval below defined thresholds, to reduce checkpoint fatigue for genuinely low-stakes, high-frequency actions without weakening the checkpoint for anything else.
- **Cross-chain settlement** — the current implementation targets a single blockchain network; broader settlement support is a natural extension as usage diversifies.

None of these should be read as loosening the core commitment of this paper: that meaningful, individually legible human consent should remain possible for any action software takes on a person's behalf, no matter how autonomous the software initiating it becomes.

## 5. Conclusion

The premise of this paper is narrow and, we think, hard to disagree with: as software takes on more initiative, the mechanisms for a person to stay meaningfully in control need to become *infrastructure* — cheap and reliable enough that every application doesn't reinvent it badly, or skip it entirely. Approva is an attempt to build that infrastructure as an open, adoptable layer, rather than a proprietary feature of any single product.

---

*For technical details, see [Architecture](./docs/02-architecture.md), [Authorization Flow](./docs/04-authorization-flow.md), and [Security Model](./docs/08-security-model.md). For implementation, see [SDK Reference](./docs/09-sdk-reference.md).*
