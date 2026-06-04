# Output Template

Use cards and lists. Do not use tables.

## Standard Shape

```md
## 4x4 Status

- Status: WINNER SELECTED | PROBE FIRST | SPLIT DECISION | WRONG TOOL | INSUFFICIENT SIGNAL
- Mode: FAST | STANDARD | RAPID | DEEP
- Winner: [lane name or "none yet"]
- Reason: [one sentence]
- Next move: [implement/probe/switch skill/ask for missing context]

## Frame

- Target behavior:
- Constraint:
- What would count as success:

## Four Lanes

### Lane A: Explorer

- Payoff:
- Claim:
- Evidence:
- Risk:
- What would make it lose:

### Lane B: Conservative

- Payoff:
- Claim:
- Evidence:
- Risk:
- What would make it lose:

### Lane C: Adversary

- Payoff:
- Claim:
- Evidence:
- Risk:
- What would make it lose:

### Lane D: Verifier

- Payoff:
- Claim:
- Evidence:
- Risk:
- What would make it lose:

## Tournament

- Strongest critique:
- What survived:
- What lost:
- Discriminating evidence:

## Validation Gates

- Scope:
- Execution:
- Self-reflection:
- Memory:

## Next Move

- [single concrete action]
```

## FAST Shape

```md
## 4x4 Status

- Status:
- Winner:
- Next move:

## Lanes

- Explorer:
- Conservative:
- Adversary:
- Verifier:

## Decision

- Why this wins:
- What to verify:
```

## Anti-Slop Rules

- Omit empty sections.
- Do not invent evidence.
- Do not hide uncertainty behind confident wording.
- Do not let all lanes recommend the same fix.
- Do not propose broad cleanup as the winning action unless broad cleanup is the proven mechanism.
- Keep implementation advice scoped to the winning lane.
