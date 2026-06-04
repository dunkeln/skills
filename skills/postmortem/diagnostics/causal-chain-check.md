# Causal Chain Check

Load when the RCA risks becoming a plausible story rather than a proven chain.

## Required Chain

```text
trigger -> mechanism -> visible failure -> impact
```

For each link, record:

- evidence
- contradiction
- missing evidence
- cheapest discriminating check

## Common Chain Errors

- trigger treated as root cause
- correlation treated as causation
- user-visible symptom treated as mechanism
- mitigation treated as correction
- missing "why possible"
- no verification path

## Status Guidance

- Any inferred material link: LIKELY CAUSE at best.
- Two or more surviving chains: MULTIPLE CANDIDATES.
- No direct or independent evidence: EVIDENCE GAP.
- Chain proven but verification missing: LIKELY CAUSE, not ROOT CAUSE IDENTIFIED.
