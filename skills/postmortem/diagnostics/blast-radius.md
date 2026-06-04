# Blast Radius

Load when impact, recurrence risk, or detection quality is unclear.

## Impact Boundary

- affected users
- affected systems
- affected time window
- affected data
- affected permissions or security boundary
- degraded business or developer workflow

## Detection Boundary

- first signal
- first human awareness
- alert path
- noisy or missing metrics
- time to detect
- time to localize
- time to mitigate

## Recurrence Surface

Ask where the same mechanism can recur:

- same code path
- same dependency
- same config pattern
- same deploy gate
- same data shape
- same team handoff
- same monitoring gap

If recurrence surface is broad, the minimal fix must include a guard or detection improvement, not only a local patch.
