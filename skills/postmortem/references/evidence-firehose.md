# Evidence Firehose

Use this when gathering evidence for RCA. The goal is broad evidence capture before narrowing to one story.

## Code and Change Evidence

- commits, PRs, release notes, deploy logs
- feature flags and config changes
- dependency version changes
- schema and migration changes
- generated code, build artifacts, lockfiles

## Runtime Evidence

- application logs
- traces and spans
- metrics and dashboards
- alerts
- Kubernetes or runtime events
- queue lag, retries, saturation, resource pressure
- upstream/downstream health

## Data Evidence

- input shape
- output diff
- schema state
- data distribution changes
- null/empty/default values
- duplicate or missing records
- integrity constraints

## Test and Guard Evidence

- failing tests
- missing coverage around the failed behavior
- fixtures that describe intended behavior
- deploy gates
- rollback or recovery drills
- canary/ramp controls

## Human and Process Evidence

- runbooks
- prior incidents
- tickets and user reports
- ownership and handoff boundaries
- review comments
- deadline or incentive pressure

## Evidence Quality

- **Direct proof:** artifact demonstrates the mechanism.
- **Strong support:** independent evidence sources point to the same mechanism.
- **Weak support:** correlation without mechanism.
- **Contradiction:** evidence that should appear if the hypothesis were true, but does not.
- **Missing:** evidence class not available; state why it matters.
