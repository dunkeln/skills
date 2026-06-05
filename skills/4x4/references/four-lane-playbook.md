# Four-Lane Playbook

Use the four lanes to turn parallelism into structured disagreement. The goal is not four answers; the goal is one next move that survives serious challenge.

## Default Lanes

### Wide Search

- How it wins: finds a path the obvious answer missed.
- Good at: escaping local minima, finding ignored paths, reframing the implementation.
- Must answer: what obvious assumption might be false?
- Loses when: novelty adds scope without stronger evidence.

### Smallest Safe Move

- How it wins: solves the behavior with the least risky change.
- Good at: smallest safe fix, compatibility, rollback, migration risk.
- Must answer: what is the least change that could work?
- Loses when: safety preserves the wrong behavior or dodges the core issue.

### Break The Favorite

- How it wins: prevents the team from shipping the wrong confident answer.
- Good at: hidden failure modes, race conditions, missing constraints, user harm.
- Must answer: why might the best-sounding fix be wrong?
- Loses when: critique is generic and not tied to evidence.

### Prove It

- How it wins: identifies the fastest proof or deciding check.
- Good at: executable checks, logs, traces, counterfactuals, acceptance criteria.
- Must answer: what evidence would decide this quickly?
- Loses when: verification cost exceeds the decision value.

## Domain Lane Sets

Use domain names when they create clearer separation, but keep the four lane incentives above active.

Product app bug:

- UI and interaction behavior.
- State and data flow.
- API or external contract.
- Safety, fallback, or error boundary.

Backend/data issue:

- Contract and schema.
- Persistence and migration.
- Concurrency and lifecycle.
- Observability and rollback.

AI or LLM-app issue:

- Prompt, instructions, and context.
- Retrieval, memory, and data quality.
- Tool/runtime behavior.
- Evaluation, guardrail, and user acceptance.

Infra or deploy issue:

- Config, secrets, and environment.
- Network, dependency, and service boundary.
- Deploy, migration, and version skew.
- Rollback, detection, and operational safety.

Greenfield feature:

- User workflow.
- Data model.
- Integration boundary.
- Edge cases and failure states.

## Pick Criteria

Compare qualitatively. Avoid fake precision.

- Evidence strength: what code, logs, traces, docs, or prior attempts support it?
- Counterfactual fit: would this explain the observed behavior and the absence of other symptoms?
- Blast radius: what contracts, data, users, or workflows could change?
- Reversibility: can the change be backed out safely?
- User value: does it solve the behavior the user actually cares about?
- Opposition survival: did it survive the strongest critique?

## Pick Rule

Do not pick the most confident lane. Pick the lane whose explanation and next action survive the strongest opposing lane.

If no lane wins, return PROBE with the smallest deciding check.
