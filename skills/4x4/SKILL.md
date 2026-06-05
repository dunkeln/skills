---
name: "4x4"
description: "Four-lane product-engineering workflow for ambiguous bugs, feature directions, architecture choices, and agent loops: compare the bold path, safe path, break-it path, and proof path before choosing the next move."
---

# 4X4

Break agent tunneling when one plausible path is not enough. Compare four distinct lanes, challenge the favorite, and pick the next move with proof.

> **Runtime is self-sufficient.** Every rule that affects analysis behavior lives here: use cases, routing, modes, result calls, lane rules, proof checks, output shape, and reference-loading rules.

---

# Use When

Invoke when the user asks for 4x4 analysis, parallel exploration, or needs help choosing between plausible paths for an ambiguous engineering bug, feature direction, architecture fork, implementation plan, or repeated agent loop.

Strong fits:

- multiple plausible fixes or implementation paths
- agent keeps chasing the same failing hypothesis
- product behavior is clear but technical path is unclear
- UI/state/API/safety concerns interact
- frontend/backend/data/deploy ownership is unclear
- a proposed fix needs challenge before implementation
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
- E -> WRONG TOOL unless the user asks for structured comparison

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

1. Look in four directions before committing to one.
2. Four copies of the same guess are not four lanes.
3. Different incentives create better disagreement than different labels.
4. Confidence does not win; proof does.
5. A lane must explain what would make it lose.
6. Compare product behavior, evidence, reversibility, and blast radius.
7. Implementation starts only after the winning lane passes validation.

---

# Load-Bearing Behavioral Rules

These rules fire in every mode including FAST.

1. **Lane separation:** Each lane must use a distinct lens and incentive. If lanes collapse into the same answer, run `diagnostics/lane-collapse-check.md`.
2. **Different incentives:** Always include wide search, smallest safe move, break-the-favorite, and prove-it incentives, even if domain-specific lane names are used.
3. **Proof before pick:** Do not recommend implementation unless the chosen lane cites evidence, a deciding probe, or an explicit assumption that must be verified.
4. **Challenge the favorite:** The leading lane must survive the strongest critique from another lane. If it does not, return PROBE or SPLIT.
5. **Proof checks:** Before code changes, run the four validation layers: identity/scope, task execution, self-reflection, and system memory.
6. **Output shape:** Use product-friendly Markdown cards/lists, not tables. First substantive block must be `4x4 Snapshot`. Do not expose internal process labels unless the user asks for them.

---

# Mode Selection

Select the strongest applicable signal. If signals conflict, escalate.

- **FAST:** Low-risk ambiguity, sparse context, or user asks for a quick split. Keep lane cards short.
- **STANDARD:** Default. Multiple plausible paths and enough context to compare them.
- **RAPID:** User needs an unblock quickly, but choosing wrong still matters. Favor discriminating probes and reversible action.
- **DEEP:** Prior failed attempts, high blast radius, shared contracts, user/data/security/deploy risk, or strong risk of agent tunneling.

---

# Result Calls

- **PICKED** — one lane survived challenge and proof checks; implementation or next step is clear.
- **PROBE** — one or more small checks would decide between lanes; do not implement yet.
- **SPLIT** — two lanes remain plausible; name the smallest deciding evidence.
- **WRONG TOOL** — use `premortem`, `postmortem`, or a direct implementation path instead.
- **NEEDS SIGNAL** — no concrete behavior, constraints, or competing paths are available.

---

# Four-Lane Engine

**F1** Frame the behavior or decision surface.

**F2** Design four lanes. Use product-friendly labels in the output and keep the internal incentives in mind:

- Wide Search: maximize novelty and search breadth.
- Smallest Safe Move: minimize blast radius and preserve contracts.
- Break the Favorite: disprove the leading fix and expose hidden failure modes.
- Prove It: demand evidence, executable checks, and counterfactual fit.

**F3** Run each lane with its incentive.

**F4** Score lanes on evidence strength, counterfactual fit, reversibility, user value, and opposition survival.

**F5** Attack the leading lane with the strongest opposing case.

**F6** Apply validation layers.

**F7** Produce the next move: implement, probe, narrow scope, or hand off to `premortem`/`postmortem`.

Load `references/four-lane-playbook.md` for lane design patterns and pick criteria.

---

# Output Non-Negotiables

1. Lead with `4x4 Snapshot`.
2. Use cards/lists, not tables.
3. Keep the four lanes visibly distinct.
4. Name why losing lanes lost.
5. Do not pad. Omit empty sections.
6. If implementation follows, keep it scoped to the winning lane and honor repo/user testing constraints.
7. User-facing language should feel like product work: lane, bet, proof, risk, pick, next move. Avoid exposing internal process labels unless explaining the skill itself.

Load `references/output-template.md` for the full response shape.

---

# Reference Loading

Load based on mode before beginning analysis:

**FAST:** Load `references/output-template.md` only.

**STANDARD / RAPID / DEEP:** Load:

1. `references/output-template.md`
2. `references/four-lane-playbook.md`
3. `references/validation-layers.md`

**Conditional loads:**

- lanes converge on the same fix, files, or assumption -> `diagnostics/lane-collapse-check.md`
- agent is looping, overclaiming, or producing fake rigor -> `gotchas.md`

**DEEP:** Load all references and diagnostics unconditionally.
