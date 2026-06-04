# Lane Collapse Check

Use when two or more lanes converge on the same files, same assumption, same fix, or same wording before evidence justifies convergence.

## Collapse Signals

- All lanes recommend the same change.
- Lanes differ only by label, not by payoff.
- Every lane inspects the same narrow path.
- The adversary branch only adds generic caution.
- The verifier branch asks for checks that do not discriminate between lanes.
- The winning lane was chosen before opposing evidence was considered.

## Recovery

Regenerate lanes by changing constraints, not adjectives.

Use four of these constraints:

- No code change allowed; find a probe only.
- Smallest reversible code change.
- Assume the leading hypothesis is false.
- Optimize for user-visible behavior only.
- Optimize for contract compatibility only.
- Optimize for rollback and operational safety.
- Inspect the analogous nearby flow first.
- Treat missing observability as the primary issue.

## Required Output

Name:

- which lanes collapsed
- what assumption they shared
- the replacement lane constraints
- the new discriminating evidence

Then rerun the tournament.
