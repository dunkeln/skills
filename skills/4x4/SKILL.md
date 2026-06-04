---
name: "4x4"
description: "Parallel branch tournament for ambiguous engineering bugs, feature directions, architecture choices, and agent loops: split into four distinct lanes, score under adversarial payoffs, select a winner, and validate before implementation."
---

# 4X4

Break agent tunneling when one plausible path is not enough. Run four distinct lanes, score them under different payoffs, attack the winner, and validate before changing code.

> **Runtime is self-sufficient.** Every rule that affects analysis behavior lives here: use cases, routing, modes, status taxonomy, branch tournament rules, validation gates, output shape, and reference-loading rules.

---

# Use When

Invoke when the user asks for 4x4 analysis, parallel exploration, branch tournament, or needs help with an ambiguous engineering bug, feature direction, architecture fork, implementation plan, or repeated agent loop.

Strong fits:

- multiple plausible fixes or implementation paths
- agent keeps chasing the same failing hypothesis
- product behavior is clear but technical path is unclear
- UI/state/API/safety concerns interact
- frontend/backend/data/deploy ownership is unclear
- a proposed fix needs adversarial comparison before implementation
- high uncertainty where a single-pass answer would likely overfit

---

# Do Not Use When

- The failure already needs a causal incident explanation; use `postmortem`.
- The user is deciding whether to commit to a high-risk future plan; use `premortem`.
- The task is an obvious local edit with one relevant execution path.
- The user explicitly asked to implement a known solution without option analysis.
- There is no concrete behavior, bug, feature, or decision surface to split.

---

# Intake Routing

Run before analysis begins. If the user supplied enough context, infer routing briefly and proceed.

## Layer 1 — Task Shape

> A. Stuck bug or regression · B. New feature with unclear implementation · C. Architecture or integration fork · D. Proposed fix needs challenge · E. Simple known change

- A/B/C/D -> Layer 2
- E -> WRONG TOOL unless the user asks for adversarial comparison

## Layer 2 — Ambiguity and Stakes

> 1. Are there at least two plausible paths? · 2. Could the wrong path waste meaningful time or change shared contracts? · 3. Is user-visible behavior, data, deploy, infra, or AI-system quality involved? · 4. Has a prior attempt failed?

- Prior attempt failed, shared contract risk, or high user/data/deploy impact -> DEEP
- Multiple plausible paths with moderate blast radius -> STANDARD
- Time-sensitive unblock with enough context -> RAPID
- Sparse context or low-risk choice -> FAST

## Layer 3 — Execution Surface

> 1. Analysis only · 2. User wants implementation after selection · 3. User explicitly wants real parallel worktrees/subagents

- 1 -> run simulated lanes in the current response.
- 2 -> select and validate a winner before editing.
- 3 -> use available tooling if present; otherwise provide exact branch/worktree prompts and proceed with simulated lanes.

---

# Core Principles

1. Diverge before converging.
2. Four copies of the same guess are not four lanes.
3. Different payoffs create better disagreement than different labels.
4. Confidence is not the winner; survival under opposition is.
5. A branch must explain what would make it lose.
6. Compare product behavior, evidence, reversibility, and blast radius.
7. Implementation starts only after the winning lane passes validation.

---

# Load-Bearing Behavioral Rules

These rules fire in every mode including FAST.

1. **Lane separation gate:** Each lane must use a distinct lens and payoff. If lanes collapse into the same answer, run `diagnostics/lane-collapse-check.md`.
2. **Adversarial payoff gate:** Always include Explorer, Conservative, Adversary, and Verifier incentives, even if domain-specific lane names are used.
3. **Evidence gate:** Do not recommend implementation unless the winning lane cites evidence, a discriminating probe, or an explicit assumption that must be verified.
4. **Opposition gate:** The leading lane must survive the strongest critique from another lane. If it does not, return PROBE FIRST or SPLIT DECISION.
5. **Validation gate:** Before code changes, run the four validation layers: identity/scope, task execution, self-reflection, and system memory.
6. **Output shape gate:** Use Markdown cards/lists, not tables. First substantive block must be `4x4 Status`.

---

# Mode Selection

Select the strongest applicable signal. If signals conflict, escalate.

- **FAST:** Low-risk ambiguity, sparse context, or user asks for a quick split. Keep lane cards short.
- **STANDARD:** Default. Multiple plausible paths and enough context to compare them.
- **RAPID:** User needs an unblock quickly, but choosing wrong still matters. Favor discriminating probes and reversible action.
- **DEEP:** Prior failed attempts, high blast radius, shared contracts, user/data/security/deploy risk, or strong risk of agent tunneling.

---

# Status Taxonomy

- **WINNER SELECTED** — one lane survived opposition and validation; implementation or next step is clear.
- **PROBE FIRST** — one or more small checks would decide between lanes; do not implement yet.
- **SPLIT DECISION** — two lanes remain plausible; name the smallest discriminating evidence.
- **WRONG TOOL** — use `premortem`, `postmortem`, or a direct implementation path instead.
- **INSUFFICIENT SIGNAL** — no concrete behavior, constraints, or competing paths are available.

---

# Branch Tournament Engine

**F1** Frame the behavior or decision surface.

**F2** Design four lanes:

- Explorer: maximize novelty and search breadth.
- Conservative: minimize blast radius and preserve contracts.
- Adversary: disprove the leading fix and expose hidden failure modes.
- Verifier: demand evidence, executable checks, and counterfactual fit.

**F3** Run each lane with its payoff.

**F4** Score lanes on evidence strength, counterfactual fit, reversibility, user value, and opposition survival.

**F5** Attack the leading lane with the strongest opposing case.

**F6** Apply validation layers.

**F7** Produce the next move: implement, probe, narrow scope, or hand off to `premortem`/`postmortem`.

Load `references/branch-tournament.md` for lane design patterns and scoring detail.

---

# Output Non-Negotiables

1. Lead with `4x4 Status`.
2. Use cards/lists, not tables.
3. Keep the four lanes visibly distinct.
4. Name why losing lanes lost.
5. Do not pad. Omit empty sections.
6. If implementation follows, keep it scoped to the winning lane and honor repo/user testing constraints.

Load `references/output-template.md` for the full response shape.

---

# Reference Loading

Load based on mode before beginning analysis:

**FAST:** Load `references/output-template.md` only.

**STANDARD / RAPID / DEEP:** Load:

1. `references/output-template.md`
2. `references/branch-tournament.md`
3. `references/validation-layers.md`

**Conditional loads:**

- lanes converge on the same fix, files, or assumption -> `diagnostics/lane-collapse-check.md`
- agent is looping, overclaiming, or producing fake rigor -> `gotchas.md`

**DEEP:** Load all references and diagnostics unconditionally.
