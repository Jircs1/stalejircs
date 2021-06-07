export enum Option {
  RepoToken = 'repo-token',
  StaleIssueMessage = 'stale-issue-message',
  StalePrMessage = 'stale-pr-message',
  CloseIssueMessage = 'close-issue-message',
  ClosePrMessage = 'close-pr-message',
  DaysBeforeStale = 'days-before-stale',
  DaysBeforeIssueStale = 'days-before-issue-stale',
  DaysBeforePrStale = 'days-before-pr-stale',
  DaysBeforeClose = 'days-before-close',
  DaysBeforeIssueClose = 'days-before-issue-close',
  DaysBeforePrClose = 'days-before-pr-close',
  StaleIssueLabel = 'stale-issue-label',
  CloseIssueLabel = 'close-issue-label',
  ExemptIssueLabels = 'exempt-issue-labels',
  StalePrLabel = 'stale-pr-label',
  ClosePrLabel = 'close-pr-label',
  ExemptPrLabels = 'exempt-pr-labels',
  OnlyLabels = 'only-labels',
  OnlyIssueLabels = 'only-issue-labels',
  OnlyPrLabels = 'only-pr-labels',
  AnyOfLabels = 'any-of-labels',
  OperationsPerRun = 'operations-per-run',
  RemoveStaleWhenUpdated = 'remove-stale-when-updated',
  RemoveIssueStaleWhenUpdated = 'remove-issue-stale-when-updated',
  RemovePrStaleWhenUpdated = 'remove-pr-stale-when-updated',
  DebugOnly = 'debug-only',
  Ascending = 'ascending',
  DeleteBranch = 'delete-branch',
  StartDate = 'start-date',
  ExemptMilestones = 'exempt-milestones',
  ExemptIssueMilestones = 'exempt-issue-milestones',
  ExemptPrMilestones = 'exempt-pr-milestones',
  ExemptAllMilestones = 'exempt-all-milestones',
  ExemptAllIssueMilestones = 'exempt-all-issue-milestones',
  ExemptAllPrMilestones = 'exempt-all-pr-milestones',
  ExemptAssignees = 'exempt-assignees',
  ExemptIssueAssignees = 'exempt-issue-assignees',
  ExemptPrAssignees = 'exempt-pr-assignees',
  ExemptAllAssignees = 'exempt-all-assignees',
  ExemptAllIssueAssignees = 'exempt-all-issue-assignees',
  ExemptAllPrAssignees = 'exempt-all-pr-assignees',
  EnableStatistics = 'enable-statistics'
}
