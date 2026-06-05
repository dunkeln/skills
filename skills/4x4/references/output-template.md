# Output Template

Use cards and lists. Do not use tables.

Use product-facing words. The user should see lanes, bets, proof, risk, pick, and next move. Avoid exposing internal process labels unless the user asks how the skill works.

## Standard Shape

```md
## 4x4 Snapshot

- Call: PICKED | PROBE | SPLIT | WRONG TOOL | NEEDS SIGNAL
- Mode: FAST | STANDARD | RAPID | DEEP
- Best lane: [lane name or "none yet"]
- Why: [one sentence]
- Next move: [implement/probe/switch skill/ask for missing context]

## What We Are Trying To Do

- Target behavior:
- Constraint that matters:
- Done means:

## Four Lanes

### Lane A: Wide Search

- Bet:
- Why it could work:
- Risk:
- Proof needed:

### Lane B: Smallest Safe Move

- Bet:
- Why it could work:
- Risk:
- Proof needed:

### Lane C: Break The Favorite

- Bet:
- What it challenges:
- Risk:
- Proof needed:

### Lane D: Prove It

- Bet:
- Fastest proof:
- Risk:
- What would change the call:

## Pick

- Chosen lane:
- Why it beats the others:
- What we are not doing:
- What could still change the call:

## Proof

- Scope check:
- Breakage risk:
- Fastest verification:
- Prior pattern or memory:

## Next Move

- [single concrete action]
```

## FAST Shape

```md
## 4x4 Snapshot

- Call:
- Best lane:
- Next move:

## Lanes

- Wide Search:
- Smallest Safe Move:
- Break The Favorite:
- Prove It:

## Pick

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
- Prefer "proof needed" over "evidence gap" when writing to product engineers.
