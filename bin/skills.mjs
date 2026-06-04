#!/usr/bin/env node
import { cp, mkdir, readFile, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import os from "node:os";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function usage() {
  console.error("Usage: skills add <skill-name|github-url> [--target <dir>] [--force]");
  process.exit(1);
}

function skillNameFrom(input) {
  try {
    const url = new URL(input);
    const parts = url.pathname.split("/").filter(Boolean);
    return parts.at(-1);
  } catch {
    return input;
  }
}

async function main() {
  const [command, input, ...rest] = process.argv.slice(2);
  if (command !== "add" || !input) usage();

  let targetRoot = path.join(os.homedir(), ".codex", "skills");
  let force = false;
  for (let i = 0; i < rest.length; i += 1) {
    if (rest[i] === "--force") {
      force = true;
    } else if (rest[i] === "--target") {
      targetRoot = path.resolve(rest[++i] ?? usage());
    } else {
      usage();
    }
  }

  const registry = JSON.parse(await readFile(path.join(root, "registry.json"), "utf8"));
  const name = skillNameFrom(input);
  const skill = registry.skills[name];
  if (!skill) {
    console.error(`Unknown skill: ${name}`);
    process.exit(1);
  }

  const source = path.join(root, skill.path);
  const destination = path.join(targetRoot, name);
  if (existsSync(destination)) {
    if (!force) {
      console.error(`Skill already exists: ${destination}`);
      console.error("Use --force to replace it.");
      process.exit(1);
    }
    await rm(destination, { recursive: true, force: true });
  }

  await mkdir(targetRoot, { recursive: true });
  await cp(source, destination, { recursive: true });
  console.log(`Installed ${name} to ${destination}`);
}

main().catch((error) => {
  console.error(error?.message ?? error);
  process.exit(1);
});
