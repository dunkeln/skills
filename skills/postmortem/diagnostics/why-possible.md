# Why Possible

Load when the RCA explains what broke but not why the system allowed it.

## Enabling Conditions

Look for:

- missing or weak test
- missing deploy gate
- missing contract
- missing rollback or recovery drill
- missing alert
- unclear owner
- unsafe default
- config drift
- hidden dependency
- stale runbook
- deadline or incentive pressure

## Good "Why Possible" Statements

- "The migration was validated by row count, but no check compared business-critical derived fields."
- "The feature flag allowed 100 percent rollout without a staged ramp or automatic rollback."
- "The API contract allowed null, but the downstream code assumed non-null."

## Weak Statements

- "Human error."
- "The test missed it."
- "Bad deployment."
- "Insufficient process."

Rewrite weak statements into specific system conditions.
