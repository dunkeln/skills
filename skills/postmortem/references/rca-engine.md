# RCA Engine

Use this reference for STANDARD, RAPID, and DEEP mode. It defines the analysis sequence.

## R1 Symptom Boundary

Establish the failure before explaining it.

- What failed?
- What was expected?
- Who or what was affected?
- When did it start?
- Is it ongoing?
- What is explicitly out of scope?

Do not start with a fix. If the symptom boundary is unclear, return EVIDENCE GAP or ask the minimum clarifying question.

## R2 Evidence Firehose

Gather evidence in parallel. Look across code, runtime, deploys, config, telemetry, and prior incidents instead of following one hunch at a time.

Evidence classes:

- code diff
- deploy/release history
- logs
- traces
- metrics
- alerts
- configs and flags
- tests and fixtures
- data shape or schema
- dependency state
- runbooks and prior incidents
- user reports or tickets

## R3 Timeline and Change Correlation

Create an ordered timeline:

1. last known good
2. first symptom
3. relevant deploys/config changes
4. alerts and metric shifts
5. mitigations attempted
6. current state

Correlation is only a lead. It becomes causal only when the mechanism is shown.

## R4 Hypothesis Set

Maintain at least two hypotheses until evidence eliminates them.

For each hypothesis:

- what it predicts
- evidence that supports it
- evidence that contradicts it
- cheapest discriminating check

## R5 Causal Chain

Write the chain as:

```text
trigger -> mechanism -> visible failure -> impact
```

Every material link needs evidence. If one link is inferred, the status cannot exceed LIKELY CAUSE.

## R6 Why Possible

Explain the enabling condition:

- missing test
- missing contract
- missing rollback guard
- missing alert
- missing owner
- unsafe default
- config drift
- hidden dependency
- unchecked assumption
- review blind spot
- incentive or deadline pressure

This is where recurrence prevention lives.

## R7 Blast Radius and Detection

Identify:

- affected systems and users
- time window
- data integrity or security exposure
- detection path
- why detection was late or noisy
- where the same failure can recur

## R8 Minimal Fix

Separate:

- mitigation: stops current impact
- correction: breaks the causal chain
- prevention: guards recurrence

Prefer the smallest change that breaks the mechanism. Avoid broad process recommendations unless process failure is evidenced.

## R9 Verification and Recurrence Guard

Define proof:

- failing test now passes
- replay reproduces then no longer reproduces
- metric returns below threshold
- alert fires on synthetic recurrence
- canary confirms behavior
- deployment gate blocks the bad path
- data diff proves integrity

If verification is missing, do not call the RCA complete.
