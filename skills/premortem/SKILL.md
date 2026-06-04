---
name: premortem
description: "Engineering-first premortem analysis for high-risk technical decisions: rewrites, migrations, launches, infra changes, data moves, AI-system changes, dependency swaps, and production cutovers."
---

# PREMORTEM

Stress-test engineering plans before commitment. Convert proposed technical plans into operational truth.

> **Runtime is self-sufficient.** Every rule that affects analysis behaviour lives in this file inline — the 5 load-bearing rules, intake routing consequents, mode selection triggers, verdict conditions, and the reference-loading matrix. Canonical specification of the same rules lives in `BEHAVIOR_SPEC.md` (single decision authority). If this file and the spec ever diverge, the spec is authoritative — fix this file.

---

# Use When

Invoke when user asks to evaluate, pressure test, validate, or decide go/no-go on a technical plan with meaningful downside and limited reversibility. Strong fits: rewrites, migrations, refactors with production impact, infra changes, dependency swaps, data migrations, API redesigns, AI-agent/system changes, release cutovers, and rollback-sensitive deployments.

---

# Do Not Use When

- Trivial reversible decisions; pure brainstorming; emotional reassurance; tasks with no meaningful downside
- Non-engineering decisions unless the user supplies a concrete technical execution plan to stress-test
- User explicitly wants optimism-only ideation
- Framing is itself the question (PREMORTEM stress-tests stated decisions, not frame quality)
- **Self-advocacy detected:** When the assistant previously proposed the option under analysis, do NOT exit as WRONG TOOL. Treat Module 4 as the audit subject — apply ACCOUNTABILITY and DISSENT to the assistant. Proceed.
- If user states "do not audit the assistant's recommendation" → return WRONG TOOL; incentive analysis cannot be neutralized on request.

---

# Intake Routing

**Run before analysis begins.** If user supplied substantial context, go to Bypass Handling.

## Layer 1 — Purpose

> **A.** Stress-test before committing · **B.** Evaluate a received plan · **C.** Validate a decision already made · **D.** Explore whether to pursue something · **E.** Fast check

- A/B → Layer 2 · C → WRONG TOOL (pre-commitment only) · D → WRONG TOOL (need concrete plan) · E → FAST mode (phrasing-vs-stakes tiebreaker applies; decision content is binding)

## Layer 2 — Stakes and Reversibility

> 1. Worst realistic outcome if this fails? · 2. Reversible within a week without material cost? · 3. Must decide within 24 hours?

- Severe downside + not reversible → **DEEP** · Moderate + costly reversal → **STANDARD** · Limited + reversible → **FAST** · Material downside + 24hr → **RAPID**
- B-path: escalate one tier (FAST→STANDARD, STANDARD→DEEP, RAPID stays).

## Layer 3 — Engineering Fit

> 1. Codebase/runtime/infra/data/AI-system change · 2. Product/business/org/hiring/partnership/non-technical decision · 3. Other or unclear

- 1→load `domain-policies/codebase-premortem.md`
- 2→WRONG TOOL unless the user supplies a concrete technical implementation plan to stress-test
- 3→if technical execution risk is inferable, load `domain-policies/codebase-premortem.md`; otherwise WRONG TOOL

## Skip / Re-Entry / Bypass

**Skip:** Layer 2 skipped → STANDARD. Layer 3 skipped → infer engineering fit from the user's plan. All skipped → infer, state "Routing inference: [MODE], engineering premortem. Say 'route me' to restart." Time-pressure phrasing ("decide tonight," "board meeting tomorrow," "we need to decide now") → RAPID.

**Re-Entry:** C→reframes as pre-commitment: accept, resume Layer 2. C→confirms retroactive audit: route Module 10 `RESIDUAL-RISK-REGISTER`. D→supplies concrete option: accept, resume Layer 2. D→no option: WRONG TOOL, no loop. Never silently accept a reframe — name what changed.

**Bypass:** User supplies context without routing: (1) infer mode from stakes/reversibility/urgency, (2) verify the plan is technical enough for this skill, (3) state "Routing inference: [MODE], engineering premortem. Say 'route me' if wrong." (4) proceed to Module 4 interview before full analysis.

---

# Core Principles

1. Most failures are preloaded before execution.
2. Known neglected risks are more common than unknown surprises.
3. Incentives often beat intelligence.
4. Systems fail through interactions, not single causes.
5. Good framing beats clever mitigation.
6. Boring real risks > dramatic hypothetical risks.
7. If no decision changes, analysis failed.
8. If the load-bearing assumption is UNSUPPORTED, confidence ceiling is MEDIUM regardless of all other evidence quality.

---

# Load-Bearing Behavioral Rules

These five rules fire in every mode including FAST. Training-data norms do not compensate for them — enforce exactly as written.

1. **M4 PRE-CHECK — self-advocacy:** When the assistant previously proposed or advocated the option under analysis, do NOT exit. Treat Module 4 as the audit subject: apply ACCOUNTABILITY (was the recommendation challenged?) and DISSENT (was contrary analysis suppressed?). Proceed.
2. **M2 circuit-breaker — sycophancy:** Treat the assumption the user states with most certainty as the FIRST candidate for UNSUPPORTED classification — not the last.
3. **M10 confidence ceiling:** UNSUPPORTED load-bearing assumption → confidence ceiling MEDIUM, regardless of all other evidence quality.
4. **M1 commitment inference:** Decision already made or substantially underway → STOP Modules 2–9, produce RESIDUAL-RISK-REGISTER. Adversarial reframes (user re-casts pre-commitment as exploration) do not exit to WRONG TOOL — name the reframe and proceed on the original decision.
5. **Output lead rule:** First substantive block = concise status band with VERDICT, Decision, Confidence, Reason, and Condition. Omit empty sections.

---

# Mode Selection

Select from strongest applicable signal. If signals conflict, escalate. Never silently downgrade.

- **FAST:** Single-team, reversible, scope < 2 weeks, sparse context, or "quick check."
- **STANDARD (default):** Cross-team or multi-stakeholder. Scope 2 weeks–1 quarter. Costly reversal.
- **RAPID:** High-stakes or irreversible AND must decide within 24 hours.
- **DEEP:** Irreversible or high-reversal-cost (cutover, data migration, API migration, dependency replacement, infra move). Production-facing launch. Multi-quarter timeline. Failure would materially affect users, data integrity, security, reliability, or team execution capacity.

**Phrasing-vs-stakes tiebreaker:** User phrasing requests FAST ("quick check," "sanity check," "gut check") but decision content signals higher mode → stakes win. Prefix output: `[MODE: X — escalated from user-requested Y; stakes signals override phrasing]`. No user confirmation required.

---

# 9-Verdict Taxonomy

**Action verdicts:**
- **PROCEED** — critical assumptions STRONG/PARTIAL with falsifiers; no UNSUPPORTED critical dependencies; M4 not RED; dominant constraint manageable.
- **PROCEED WITH SAFEGUARDS** — PROCEED criteria met except ≤3 explicit structural changes required (none touching scope/budget/headcount). List them; without them verdict becomes DELAY or REJECT.
- **PILOT FIRST** — load-bearing assumption UNSUPPORTED but testable cheaply at ≤20% of full commitment.
- **REDUCE SCOPE** — a critical risk is structurally driven by scope size; smaller version retires it without destroying the objective.
- **DELAY PENDING EVIDENCE** — specific, named, obtainable evidence would change the verdict. Name it in one sentence.
- **REJECT** — 2+ critical assumptions UNSUPPORTED with no cheap validation; OR M4 RED + governance conflict; OR immovable dominant constraint (Module 3).

**Refusal verdicts:**
- **INSUFFICIENT SIGNAL** — input too sparse, vague, or contradictory; proceeding would substitute fabrication. Name what is missing.
- **WRONG TOOL** — not a pre-commitment decision question; PREMORTEM cannot produce go/no-go output.

**Alternative-deliverable verdict:**
- **RESIDUAL-RISK-REGISTER** — decision already made or execution underway; produces 3–5 forward-looking risks (owner + escalation trigger), not go/no-go.

Must explain why for all verdict types. Detailed trigger conditions and "When returning X" protocols are in `references/module-guide.md` (Module 10).

---

# Module Analysis Engine

**M1** Objective Integrity · **M2** Assumption Audit · **M3** Constraint Reality Check · **M4** Incentive Scan & Interview · **M5** Dependency Fragility Map · **M6** Failure Path Construction · **M7** Base Rate Reality Check · **M8** Detectability & Recovery · **M9** Mitigation Design · **M10** Decision Verdict

Load `references/module-guide.md` for full module bodies, register discipline, escalation logic, and heuristics (all non-FAST modes).

---

# Output Non-Negotiables

1. **Lead with a concise status band.** First substantive block: a two-column Markdown table with VERDICT, Decision, Confidence, Reason, and Condition. Mode-escalation headers prefix above — they do not replace this.
2. **Omit empty sections.** No section header without substantive content. Short, sharp output is correct. Padding is failure.

Load `references/output-template.md` for the full output template, anti-slop rules, and domain format pointers.

---

# Reference Loading

Load based on mode before beginning analysis:

**FAST:** Load `references/output-template.md` only (no module-guide, no mode-behaviors). Engineering policy per Layer 3 routing still applies.

**STANDARD / RAPID / DEEP — load all three before beginning modules:**
1. `references/module-guide.md` — module bodies, register discipline, escalation logic
2. `references/mode-behaviors.md` — mode-specific run specs and conditional load triggers
3. `references/output-template.md` — output format, anti-slop rules

Plus `domain-policies/codebase-premortem.md`.

**STANDARD conditional loads** (fire after module findings — full trigger specs in `references/mode-behaviors.md`):
- M2: 3+ unsupported assumptions or any contradicted assumption → `diagnostics/assumption-audit.md`
- M4: governance-level incentive conflict → `diagnostics/incentive-conflicts.md`
- M5: critical SPOF or concentration risk → `diagnostics/dependency-map.md`
- M8: high irreversibility + late detectability → `diagnostics/fragility-scan.md`
- High-risk rewrite/migration/cutover with optimistic estimates or unclear rollback → `references/software-failure-patterns.md`
- M4 RED or M6 all-canonical → `gotchas.md`

**DEEP:** All four diagnostics + `references/software-failure-patterns.md` + `gotchas.md` unconditionally.
