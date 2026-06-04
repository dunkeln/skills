---
name: postmortem
description: "Evidence-chain RCA for production failures, regressions, incidents, broken deploys, CI failures, data issues, and engineering workflow failures."
---

# POSTMORTEM

Explain engineering failures after they happen. Convert symptoms into an evidence-backed causal chain, a minimal corrective action, and a verification plan.

> **Runtime is self-sufficient.** Every rule that affects analysis behavior lives in this file inline: use cases, routing, mode selection, RCA status taxonomy, module sequence, output shape, and reference-loading rules. Deeper module guidance lives in `references/`.

---

# Use When

Invoke when the user asks for RCA, postmortem, incident analysis, regression analysis, "why did this fail?", "why is this possible?", "what contributed?", "what changed?", "how do we prevent this?", or asks to debug a failure and wants a durable explanation.

Strong fits:

- production incidents and outages
- regressions after deploys
- failed migrations or backfills
- data corruption or data drift
- broken CI, deploy, or release workflows
- flaky or intermittent failures
- performance, reliability, or observability failures
- AI-agent or LLM-app behavior regressions
- security, permission, or configuration failures where engineering evidence is available

---

# Do Not Use When

- The user is asking whether to commit to a future plan; use `premortem` instead.
- The user only wants a quick code review with no failure symptom.
- The user wants blame assignment, performance management, or punishment.
- There is no observable failure, symptom, or degraded outcome to explain.
- The request is non-engineering unless a concrete technical failure path is involved.

---

# Intake Routing

Run before analysis begins. If the user supplied enough context, infer routing and state the inference briefly.

## Layer 1 — Failure State

> A. Active incident · B. Resolved but unexplained · C. Regression after change · D. Chronic/intermittent failure · E. Fix already proposed, needs RCA validation · F. No concrete failure

- A → RAPID unless severity is low.
- B/C/D/E → Layer 2.
- F → WRONG TOOL; ask for the symptom or failed behavior.

## Layer 2 — Severity and Evidence

> 1. User/data/security impact? · 2. Still ongoing? · 3. Evidence available: logs, traces, metrics, deploys, configs, code, tests, tickets? · 4. Need answer within 24 hours?

- Ongoing user/data/security impact → RAPID.
- High blast radius, data integrity, security, or repeated recurrence → DEEP.
- Clear symptom plus some evidence → STANDARD.
- Sparse context or local/reversible failure → FAST.

## Layer 3 — Engineering Fit

> 1. Code/runtime/infra/data/AI-system/CI/deploy failure · 2. Product/business/org issue with no technical evidence · 3. Other or unclear

- 1 → load `domain-policies/codebase-postmortem.md`.
- 2 → WRONG TOOL unless the user supplies technical evidence or a concrete engineering failure path.
- 3 → if technical failure is inferable, proceed with `domain-policies/codebase-postmortem.md`; otherwise INSUFFICIENT SIGNAL.

---

# Core Principles

1. Evidence beats plausible narrative.
2. A root cause is not a trigger. Name both.
3. A fix that does not address the causal mechanism is not a corrective action.
4. "Why possible?" matters as much as "what broke?"
5. RCA must distinguish cause, contributor, detection gap, and remediation.
6. Parallel evidence gathering is better than serial hunch-chasing.
7. The analysis is incomplete until verification is defined.
8. No blame. Focus on system conditions and decision paths.

---

# Load-Bearing Behavioral Rules

These rules fire in every mode including FAST.

1. **Evidence gate:** Do not return ROOT CAUSE IDENTIFIED unless at least two independent evidence sources support the causal chain, or one direct artifact proves it.
2. **Counter-hypothesis gate:** Keep at least two plausible hypotheses alive until evidence eliminates them, unless the failure mechanism is directly proven.
3. **Why-possible gate:** Every RCA must explain why the failure was possible in the system: missing test, missing guard, bad contract, blind spot, incentive, ownership gap, or monitoring gap.
4. **Minimal-fix gate:** Recommend the smallest corrective action that breaks the causal chain. Do not prescribe broad process changes unless the evidence shows the process is the mechanism.
5. **Output shape:** Use Markdown cards/lists, not tables. First substantive block must include: status, fire section, firehose section, cause chain, why possible, fix, and verification.

---

# Mode Selection

Select the strongest applicable signal. If signals conflict, escalate.

- **FAST:** Local failure, limited blast radius, reversible, sparse evidence, or user asks for a quick first pass.
- **STANDARD:** Clear symptom with enough evidence to build and test hypotheses.
- **RAPID:** Active incident, customer impact, data/security risk, deploy blocked, or answer needed within 24 hours.
- **DEEP:** High blast radius, repeated recurrence, data integrity, security, multi-service cascade, ambiguous ownership, or failed prior fixes.

---

# RCA Status Taxonomy

- **ROOT CAUSE IDENTIFIED** — causal chain is evidence-backed; trigger, mechanism, and why-possible are named.
- **LIKELY CAUSE** — evidence favors one chain but at least one link remains inferential.
- **MULTIPLE CANDIDATES** — two or more plausible chains remain; name the discriminating evidence needed.
- **EVIDENCE GAP** — symptom is real, but available evidence cannot support a causal claim.
- **MITIGATED NOT EXPLAINED** — impact is stopped, but cause remains unproven.
- **WRONG TOOL** — no engineering failure is present, or the request is a future-plan decision.

---

# Module Analysis Engine

**R1** Symptom Boundary · **R2** Evidence Firehose · **R3** Timeline and Change Correlation · **R4** Hypothesis Set · **R5** Causal Chain · **R6** Why Possible · **R7** Blast Radius and Detection · **R8** Minimal Fix · **R9** Verification and Recurrence Guard

Load `references/rca-engine.md` for module bodies and evidence discipline.

---

# Output Non-Negotiables

1. **Lead with Markdown cards/lists, not tables.** Use fixed section anchors: `🔥 Failure`, `🚒 Evidence Firehose`, `Cause Chain`, `Why Possible`, `🧯 Minimal Fix`, `Verification`.
2. **Do not pad.** Omit empty sections. Keep bullets specific and evidence-backed.
3. **Do not overclaim.** If the evidence does not prove root cause, return LIKELY CAUSE, MULTIPLE CANDIDATES, EVIDENCE GAP, or MITIGATED NOT EXPLAINED.
4. **Separate mitigation from correction.** A rollback or restart may stop impact; it is not automatically the root-cause fix.

Load `references/output-template.md` for the full output template.

---

# Reference Loading

Load based on mode before beginning analysis:

**FAST:** Load `references/output-template.md` and `domain-policies/codebase-postmortem.md` only.

**STANDARD / RAPID / DEEP:** Load:

1. `references/output-template.md`
2. `references/rca-engine.md`
3. `references/evidence-firehose.md`
4. `domain-policies/codebase-postmortem.md`

**Conditional loads:**

- ambiguous causal chain → `diagnostics/causal-chain-check.md`
- unclear why the failure was possible → `diagnostics/why-possible.md`
- unclear blast radius, detectability, or recurrence risk → `diagnostics/blast-radius.md`
- high-risk software failure pattern likely → `references/software-failure-patterns.md`
- repeated or socially sticky failure → `gotchas.md`

**DEEP:** Load all conditional references unconditionally.
