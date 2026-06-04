# POSTMORTEM Behavior Spec

Authoritative behavior spec for evidence-chain RCA. This file defines statuses, mode selection, proof gates, output constraints, and load rules.

## Statuses

- ROOT CAUSE IDENTIFIED: causal chain is supported by direct proof or at least two independent evidence sources.
- LIKELY CAUSE: one chain is favored, but at least one causal link remains inferential.
- MULTIPLE CANDIDATES: evidence supports more than one plausible chain.
- EVIDENCE GAP: symptom is real, but evidence is missing or too weak to support a causal claim.
- MITIGATED NOT EXPLAINED: impact is stopped, but the causal mechanism is not proven.
- WRONG TOOL: no engineering failure is present, or the user asks for a future decision rather than post-failure RCA.

## Proof Rules

1. Root cause requires a causal chain, not only a trigger.
2. Root cause requires evidence for each material link in the chain.
3. A single direct artifact can prove a causal link. Otherwise require independent corroboration from at least two evidence classes.
4. Every RCA must identify why the failure was possible.
5. Every corrective action must break a named link in the causal chain.
6. Every RCA must define verification. Without verification, status cannot exceed LIKELY CAUSE.
7. If evidence is sparse, return EVIDENCE GAP instead of filling gaps with plausible narrative.

## Modes

- FAST: local, reversible, low blast radius, or first-pass analysis.
- STANDARD: clear symptom and enough evidence to test hypotheses.
- RAPID: active incident, deploy blocked, customer impact, data/security risk, or answer needed within 24 hours.
- DEEP: repeated recurrence, high blast radius, data integrity, security, multi-service cascade, ambiguous ownership, or failed prior fixes.

## Modules

1. R1 Symptom Boundary: define observed failure, first-known time, expected behavior, affected surface, and non-goals.
2. R2 Evidence Firehose: collect code, logs, traces, metrics, deploys, configs, tests, tickets, alerts, and recent changes.
3. R3 Timeline and Change Correlation: order events and identify what changed before the symptom.
4. R4 Hypothesis Set: keep multiple candidate chains alive until evidence eliminates them.
5. R5 Causal Chain: express trigger to mechanism to visible failure to impact.
6. R6 Why Possible: identify missing guard, contract, test, monitor, owner, or review path.
7. R7 Blast Radius and Detection: identify affected users/systems, detection gap, and recurrence surface.
8. R8 Minimal Fix: choose the smallest change that breaks the chain.
9. R9 Verification and Recurrence Guard: define proof that the fix worked and recurrence is guarded.

## Output Rules

1. First substantive block uses Markdown cards/lists, not tables.
2. Required anchors: `🔥 Failure`, `🚒 Evidence Firehose`, `Cause Chain`, `Why Possible`, `🧯 Minimal Fix`, `Verification`.
3. Use status labels exactly as defined above.
4. If the status is not ROOT CAUSE IDENTIFIED, name the missing evidence that would upgrade or disprove the analysis.
5. No blame language. Assign ownership only for next actions and verification.

## Load Rules

- FAST: `references/output-template.md`, `domain-policies/codebase-postmortem.md`.
- STANDARD/RAPID: FAST load set plus `references/rca-engine.md`, `references/evidence-firehose.md`.
- DEEP: STANDARD/RAPID load set plus `diagnostics/causal-chain-check.md`, `diagnostics/why-possible.md`, `diagnostics/blast-radius.md`, `references/software-failure-patterns.md`, and `gotchas.md`.
