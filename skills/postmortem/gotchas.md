# Gotchas

Load in DEEP mode or when the failure keeps recurring despite local fixes.

## 1. The Fix That Only Stops the Fire

The system is restarted, rolled back, or patched, but the enabling condition remains.

Check: what prevents the same mechanism from recurring?

## 2. The Single-Cause Story

The RCA selects one convenient cause and ignores contributors that made the failure reachable.

Check: distinguish trigger, mechanism, contributor, and detection gap.

## 3. The Missing Counterfactual

The analysis never asks what evidence would disprove the favored cause.

Check: what would you expect to see if the favored chain is wrong?

## 4. The Ownerless Guard

The fix requires a guard, alert, or test, but nobody owns keeping it effective.

Check: who owns verification after the incident is closed?

## 5. The Fixture Gap

The production input that failed is absent from tests.

Check: can the failed input or a minimized equivalent become a regression fixture?

## 6. The Invisible State Change

Code is blamed while non-code state changed: flags, config, cache, data, queues, secrets, permissions, or dependency state.

Check: list every state surface changed during the failure window.
