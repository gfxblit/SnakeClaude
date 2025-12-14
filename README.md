# SnakeClaude

This is an agentic development flow to make the Snake game, written in Javascript.

The dev flow requires this as input:
- The game design document (GDD) is `docs/game_design.md`. The GDD describes what the game is, how its played, etc.
- The game architecture is described in `docs/architecture.md`. The architecture doc describes high level: how game state is managed, player inputs, etc; and low level: programming language, test frameworks, etc.
- CLAUDE.md describes the agent behavior, using test-driven development

Here's the dev flow:

1. Human writes issues decribing the feature, using `@claude` to trigger Claude.
1. Claude implements the feature using test driven development, and pushes the changes to a remote branch, updating the issue
1. Human creates PR and provides feedback in the PR
1. CI/CD deploys Javascript app to gh-pages as part of the PR
1. Claude reviews PR and updates (may iterate with human in PR)
1. After Human approves, Claude is responsible for merging the PR to main (fixing conflicts, etc.)

(note: multiple Claudes may be working on separate issues in parallel)

## Infrastructure
- TODO
- Github deployment using gh-pages


## Project Management
- 