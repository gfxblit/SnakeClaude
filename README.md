# SnakeClaude

This is an agentic development flow to make the Snake game, written in Javascript.

The dev flow requires this as input:
- The game design document (GDD) is `docs/game_design.md`. The GDD describes what the game is, how its played, etc.
- The game architecture is described in `docs/architecture.md`. The architecture doc describes high level: how game state is managed, player inputs, etc; and low level: programming language, test frameworks, etc.
- The roadmap [issue](https://github.com/gfxblit/SnakeClaude/issues/1), tracking the work.
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
- After a PR is created, Claude performs a code-review (see claude-code-reviewer.yml)
- In parallel, the PR triggers a deployment to gh-pages under https://<username>.github.io/<project-name>/pr-<pr-number>. For example, `https://gfxblit.github.io/SnakeClaude/pr-123`.This allows the human to review the PR and preview the change.
- Github deployment using gh-pages
- Once the PR is approved and Claude merges the PR to main, this will kickoff a gh-pages main deployment to https://<username>.github.io/<project-name>/, e.g. `https://gfxblit.github.io/SnakeClaude`. 

## Project Management
This project utilizes GitHub Issues for task management and roadmap tracking.

- **Roadmap Issue:** A central "Laserbyte Development Roadmap" [issue](https://github.com/gfxblit/SnakeClaude/issues/1) serves as the project's master tracking document. It contains an exhaustive checklist of all tasks and their corresponding GitHub Issues. Tasks that need to be sequenced have increasing numbers. Parallelizable tasks are under "Dev A", "Dev B", etc.
- **Epics as Milestones:** Major development phases (Epics) are tracked using GitHub Milestones, providing a high-level view of progress.
- **Task Issues:** Individual, actionable tasks are managed as separate GitHub Issues, each linked back to the roadmap.
- **Labels for Clarity:**
    - `roadmap`: Identifies the central roadmap issue.
    - `tracking`: Marks issues that serve as containers or checklists for other tasks.
    - `status:blocked`: Indicates an issue cannot be started due to a dependency on another issue, with the blocking issue referenced in its description. 
