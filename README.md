# skills

A small registry and installer for reusable coding-agent skills.

## Install a Skill

```sh
npx skills add https://github.com/dunkeln/premortem
```

The installer resolves the final URL segment as the skill name, finds it in
`registry.json`, and copies the matching folder from `skills/` into the local
skills directory.

## Available Skills

| Skill | What it does |
|---|---|
| `premortem` | Engineering-first premortem analysis for rewrites, migrations, infra changes, data moves, dependency swaps, AI-system changes, and production cutovers. |

## Registry Shape

```text
skills/
  premortem/
    SKILL.md
    references/
    diagnostics/
    domain-policies/

registry.json
bin/skills.mjs
```

## Local Development

```sh
npm run skills -- add https://github.com/dunkeln/premortem --target /tmp/skills-check --force
```
