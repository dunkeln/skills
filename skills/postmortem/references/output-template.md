# Output Template

Use this template for every postmortem response. The top block is a Markdown card/list, not a table.

```
# POSTMORTEM — [ROOT CAUSE IDENTIFIED / LIKELY CAUSE / MULTIPLE CANDIDATES / EVIDENCE GAP / MITIGATED NOT EXPLAINED / WRONG TOOL]

🔥 **Failure**
[Observed failure in one to two sentences. Include impact and time boundary when known.]

🚒 **Evidence Firehose**
- [Evidence class inspected]: [specific artifact or observation]
- [Evidence class inspected]: [specific artifact or observation]
- [Evidence not available]: [why it matters]

**Cause Chain**
[Trigger] -> [mechanism] -> [visible failure] -> [user/system impact]

**Why Possible**
[The missing guard, contract, test, monitor, owner, rollout control, or review path that made the failure reachable.]

🧯 **Minimal Fix**
[Smallest corrective action that breaks the causal chain. Separate mitigation from correction.]

**Verification**
[Command, test, replay, metric, alert, canary, or production observation that proves the fix works and recurrence is guarded.]
```

## Optional Sections

Include only when useful:

### Competing Hypotheses

- **Ruled out:** [hypothesis] — [evidence]
- **Still open:** [hypothesis] — [needed evidence]

### Blast Radius

- affected users/systems
- affected time window
- data integrity/security exposure
- recurrence surface

### Follow-Ups

- owner
- due date or trigger
- verification artifact

## Anti-Slop Rules

Never:

- claim root cause from correlation alone
- hide uncertainty behind confident prose
- recommend generic process changes without tying them to the causal chain
- treat rollback/restart as a root-cause fix
- assign blame to a person
- list every possible cause when evidence already eliminates it
- output a table as the lead format

Always:

- name the symptom boundary
- separate trigger from root cause
- state what evidence was inspected
- keep counter-hypotheses until ruled out
- explain why the failure was possible
- define verification
