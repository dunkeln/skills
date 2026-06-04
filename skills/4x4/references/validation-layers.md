# Validation Layers

Run these layers before accepting the winning lane or editing code.

## Layer 1: Identity and Scope

Purpose: prevent unauthorized scope expansion.

Ask:

- What is the exact behavior or decision surface?
- What files, contracts, data, or user flows are in scope?
- What is explicitly out of scope?
- Is this a direct implementation, a probe, or analysis only?

Fail if the winning lane requires broad refactors, schema changes, or cross-boundary changes the user did not ask for.

## Layer 2: Task Execution

Purpose: ensure the lane produces a concrete next move.

Ask:

- What is the smallest actionable change or probe?
- What evidence will it create?
- What acceptance condition would make it done?
- What command, check, or observation verifies it?

Fail if the lane produces only advice, style commentary, or generic cleanup.

## Layer 3: Self-Reflection

Purpose: catch hidden breakage before committing.

Ask:

- What could this change break downstream?
- Which shared contract or typed schema could be affected?
- What race, rollback, migration, or compatibility risk appears?
- What assumption is still unsupported?

Fail if the lane cannot name any plausible downside.

## Layer 4: System Memory

Purpose: avoid repeating known failures.

Ask:

- Has this repo or system seen a similar issue?
- Are there local instructions, AGENTS files, previous fixes, or memories that constrain this?
- Does the proposed path violate known project preferences?
- Is there an analogous flow nearby that shows the intended pattern?

Fail if the lane ignores available project memory or local guidance that directly applies.

## Gate Outcomes

- PASS: proceed with the next action.
- NEEDS PROBE: run the smallest discriminating check before implementation.
- BLOCKED: ask for missing context or switch to the correct skill.
