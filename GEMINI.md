**ALWAYS READ CLAUDE.MD FOR INSTRUCTIONS!**

## Github interactions
- **ALWAYS** try to use `gh` cli over web fetching, or asking the user to update issues, prs, etc.
- if gh fails, then fallback to informing the user via the issue/pr that initiate the ask
- if no issue/pr is available, then echo back to the user
- NEVER directly close a GitHub issue. Instead, update the issue with a comment and leave it for the user to close.

## Git worktree
- When working on a task, **ALWAYS** start by creating a worktree <current-dir>/worktrees/<proj name>-<task name>
- Do your work in that worktree
- commit changes in the worktree and push to origin

## Fetching Inline PR Comments
To fetch inline PR comments (review comments), use the GitHub CLI `gh api` command with the appropriate REST API endpoint.
Example: `gh api repos/{owner}/{repo}/pulls/{pull_number}/comments`
Replace `{owner}`, `{repo}`, and `{pull_number}` with the actual values. This command returns a JSON array of comments, each containing details like `body`, `path`, `line`, and `diff_hunk`.

