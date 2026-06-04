# dunkeln/skills

![Agent Skills](https://img.shields.io/badge/agent%20skills-SKILL.md-111827)
![Registry](https://img.shields.io/badge/registry-monorepo-2563eb)
![Status](https://img.shields.io/badge/status-active-15803d)

Engineering-first skills for coding agents. Small enough to install quickly, structured enough to keep the useful context close to the agent.

## Install

Install the `premortem` skill:

```sh
npx skills add https://github.com/dunkeln/skills --skill premortem
```

Install the `postmortem` skill:

```sh
npx skills add https://github.com/dunkeln/skills --skill postmortem
```

For a non-interactive Codex install:

```sh
npx skills add https://github.com/dunkeln/skills --skill postmortem --agent codex --copy --yes
```

Preview what is available:

```sh
npx skills add https://github.com/dunkeln/skills --list --full-depth
```

## Catalog

| Skill | Category | Status | Install |
|---|---|---:|---|
| `premortem` | Engineering risk | Active | `npx skills add https://github.com/dunkeln/skills --skill premortem` |
| `postmortem` | Engineering RCA | Active | `npx skills add https://github.com/dunkeln/skills --skill postmortem` |

## Premortem

`premortem` is for pressure-testing technical plans before they turn into expensive commitments.

Use it for:

- rewrites and migrations
- infrastructure moves
- dependency swaps
- data moves and backfills
- AI-system and agent changes
- API redesigns
- production cutovers
- rollback-sensitive releases

It is intentionally not a general strategy skill. Non-engineering decisions need a concrete technical execution plan before this skill applies.

## Postmortem

`postmortem` is for evidence-chain RCA after a technical failure has already happened.

Use it for:

- production incidents and outages
- regressions after deploys
- failed migrations and backfills
- broken CI, deploy, or release workflows
- data corruption or data drift
- flaky or intermittent failures
- performance and reliability regressions
- AI-system and LLM-app behavior regressions

It keeps the agent on a strict path:

```text
symptom -> evidence firehose -> competing hypotheses -> causal chain -> why possible -> minimal fix -> verification
```

## Output Shape

`premortem` leads with a compact decision band so the call is visible before the analysis.

```md
| VERDICT | PROCEED WITH SAFEGUARDS |
|---|---|
| Decision | Ship only after rollback is tested. |
| Confidence | Medium, because recovery is designed but not proven. |
| Reason | The critical failure mode is silent data corruption during migration. |
| Condition | Run a prod-sized shadow migration and diff business-critical records. |
```

`postmortem` uses Markdown cards/lists instead of tables so the causal story is readable.

```md
# POSTMORTEM — ROOT CAUSE IDENTIFIED

🔥 **Failure**
Checkout requests timed out after the cache-path rollout.

🚒 **Evidence Firehose**
- deploy diff: cache path enabled behind `checkout_cache_v2`
- metrics: DB pool saturation began six minutes after rollout
- traces: request latency concentrated in cache-fill path

**Cause Chain**
flag rollout -> cold-cache miss storm -> DB pool saturation -> request queue growth -> checkout timeouts

**Why Possible**
Cold-cache rollout behavior was not covered by load tests, and the flag had no staged ramp guard.

🧯 **Minimal Fix**
Disable the flag, cap concurrent cache fills, and add a cold-cache load test before re-enabling.

**Verification**
Replay production-like traffic in staging and confirm DB pool usage stays below the alert threshold.
```

## Compatibility

| Runtime | Status | Notes |
|---|---|---|
| Codex | Verified | `--agent codex --copy --yes` works with the public `skills` installer. |
| Other `SKILL.md` agents | Folder-compatible | The skill is plain `SKILL.md` plus `references/`, `diagnostics/`, and `domain-policies/`. Installer behavior depends on the target agent. |
| Manual install | Supported | Copy a folder under `skills/` into the agent's skills directory. |

## Repository Shape

```text
skills/
  premortem/
    SKILL.md
    BEHAVIOR_SPEC.md
    references/
    diagnostics/
    domain-policies/
  postmortem/
    SKILL.md
    BEHAVIOR_SPEC.md
    references/
    diagnostics/
    domain-policies/

registry.json
bin/skills.mjs
```

## Skill Contract

Every skill in this registry should stay small at the entrypoint and put depth behind explicit references.

- `SKILL.md` is required.
- Long guidance belongs in `references/`.
- Deterministic helper code belongs in `scripts/`.
- Reusable examples belong in `examples/`.
- Domain-specific policy belongs in `domain-policies/`.
- Do not mix broad business strategy into engineering-focused skills.

## Local Development

Use the local CLI wrapper when editing this repo:

```sh
npm run skills -- add postmortem --target /tmp/skills-check --force
```

Verify against the public installer without touching global skills:

```sh
rm -rf /tmp/skills-public-test
mkdir -p /tmp/skills-public-test
cd /tmp/skills-public-test
npx skills add https://github.com/dunkeln/skills --skill premortem --agent codex --copy --yes
npx skills add https://github.com/dunkeln/skills --skill postmortem --agent codex --copy --yes
```
