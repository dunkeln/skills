# Software Failure Patterns

Load when the failure involves software behavior, production systems, CI/CD, data, or infrastructure.

## Pattern 1: Deploy/Config Split

The code did not change, but a flag, environment variable, config map, secret, policy, route, or runtime default did.

Check: compare config state at last-known-good vs first-known-bad.

## Pattern 2: Contract Drift

Producer and consumer disagree about shape, nullability, ordering, auth, timing, or semantics.

Check: inspect real payloads and schema/contract tests.

## Pattern 3: Migration Blind Spot

Schema or data changes pass structural checks but fail business logic.

Check: diff business-critical records, not only row counts or schema conformance.

## Pattern 4: Saturation Cascade

One resource saturates and creates secondary symptoms elsewhere.

Check: look for queue growth, retries, pool exhaustion, CPU/memory pressure, and downstream timeout changes.

## Pattern 5: Silent Fallback

System falls back to a slower, less safe, or stale path without surfacing the mode switch.

Check: search for default branches, retry fallbacks, cache bypasses, and missing alerts.

## Pattern 6: Test Fixture Lie

Tests pass because fixtures omit the values, scale, ordering, permissions, or timing that exist in production.

Check: compare failed real inputs against fixtures.

## Pattern 7: Rollback Is Not Reversal

Rolling back code does not reverse data mutations, config changes, cache state, external side effects, or queued work.

Check: list non-code state changed during the failure window.

## Pattern 8: Observability Gap

The system had the failure but not the signal needed to detect, localize, or prove it quickly.

Check: identify the first reliable signal, the missing earlier signal, and the alert that should have existed.
