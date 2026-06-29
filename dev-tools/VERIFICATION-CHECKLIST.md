# Verification Checklist (Anti-Hallucination)

Use this checklist before reporting that something is complete, deployed, or working.

## General Rules
- [ ] Personally reviewed the relevant code/file(s) using `read_file` or `grep`
- [ ] Cross-checked with at least one other source (live site via curl, git log, terminal output)
- [ ] Explicitly verified the exact claim being made (not assumed from summaries)
- [ ] If uncertain, stated "unverified" instead of claiming it as fact

## Feature Claims
- [ ] Confirmed the feature exists in the code (function, element, logic)
- [ ] Tested or verified the feature behaves as described (where possible)
- [ ] Checked that the feature was not pre-existing unless intentionally reused

## Deployment Claims
- [ ] Confirmed the change was pushed (`git status`, `git log`)
- [ ] Verified the live site reflects the change (`curl` or browser inspection)
- [ ] Noted the exact deployment target (GitHub Pages URL, GitHub Pages URL, etc.)

## Plan / Progress Claims
- [ ] Confirmed the plan file was actually updated
- [ ] Verified the stated progress matches what was implemented

## When in Doubt
- Re-read the code
- Re-check the live site
- State uncertainty clearly

Last updated: 2026-06-29