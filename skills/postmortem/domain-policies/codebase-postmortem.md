# Codebase Postmortem Policy

This file configures runtime presentation for codebase / engineering RCA. Decision authority lives in `../BEHAVIOR_SPEC.md`. This file does not define rules.

## Required Engineering Checks

- Identify last-known-good and first-known-bad behavior.
- Compare code, config, deploy, data, and dependency state across that boundary.
- Name the exact runtime surface affected.
- Separate mitigation from correction.
- Define a verification artifact: test, replay, metric, canary, alert, or data diff.

## Engineering-Specific Cause Prompts

- What changed immediately before the failure?
- What did not change but became relevant?
- Which assumption was encoded in code, config, data, or a test fixture?
- Which contract was missing, ambiguous, or unenforced?
- Which signal would have detected this earlier?
- Which owner could have stopped or caught the bad path?

## RCA Completion Gate

An engineering RCA is incomplete if any are missing:

- symptom boundary
- evidence firehose summary
- causal chain
- why-possible explanation
- minimal corrective action
- verification plan

## Fix Quality Gate

A proposed fix is weak if it:

- only restarts or rolls back without explaining the mechanism
- adds a broad process rule without a causal link
- depends on someone remembering a caveat
- lacks a test, alert, gate, or measurable verification path
- fixes the visible symptom while leaving the enabling condition intact
