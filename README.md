# dunkeln/skills

![Agent Skills](https://img.shields.io/badge/agent%20skills-SKILL.md-111827)
![Registry](https://img.shields.io/badge/registry-monorepo-2563eb)

Engineering-first skills for coding agents.

## Install

```sh
npx skills add https://github.com/dunkeln/skills --skill premortem
npx skills add https://github.com/dunkeln/skills --skill postmortem
```

Non-interactive Codex install:

```sh
npx skills add https://github.com/dunkeln/skills --skill postmortem --agent codex --copy --yes
```

List available skills:

```sh
npx skills add https://github.com/dunkeln/skills --list --full-depth
```

## Skills

| Skill | Use When |
|---|---|
| `premortem` | Pressure-test a high-risk technical plan before committing. |
| `postmortem` | Explain an engineering failure with evidence-chain RCA. |

## Shape

```text
skills/<name>/
  SKILL.md
  BEHAVIOR_SPEC.md
  references/
  diagnostics/
  domain-policies/
```

## Conventions

- Keep `SKILL.md` short and operational.
- Put depth in `references/`, not the entrypoint.
- Add deterministic helpers under `scripts/` only when they reduce agent guesswork.
- Keep engineering skills engineering-focused; do not mix in broad business strategy.

## Local Check

```sh
npm run skills -- add postmortem --target /tmp/skills-check --force
```
