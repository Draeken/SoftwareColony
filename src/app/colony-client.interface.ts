export interface ColonyClient {
  generateSecret: { call: ({ salt, value }) => Promise<void> };
  getDomain: { call: ({ domainId }) => Promise<{
    localSkillId: number, // The domain's local skill ID
    potId: number, // The domain's funding pot ID
  }> };
  getDomainCount: { call: () => Promise<void> };
  getGlobalRewardPayoutCount: { call: () => Promise<void> };
  getUserRewardPayoutCount: { call: ({ user }) => Promise<void> };
  getTaskCount: { call: () => Promise<void> };
  getTask: { call: ({ taskId }) => Promise<void> };
  getTaskPayout: { call: ({ taskId, role, token }) => Promise<void> };
  getTaskRole: { call: ({ taskId, role }) => Promise<void> };
  getTaskWorkRatings: { call: ({ taskId }) => Promise<void> };
  getTaskWorkRatingSecret: { call: ({ taskId, role }) => Promise<void> };
  getPotBalance: { call: ({ potId, token }) => Promise<void> };
  getNonRewardPotsTotal: { call: ({ address }) => Promise<void> };
  getRewardPayoutInfo: { call: ({ payoutId }) => Promise<void> };
  getToken: { call: () => Promise<void> };
  getTransactionCount: { call: () => Promise<void> };
  createTask: { send: ({ specificationHash, domainId }, options?) => Promise<void> };
  setTaskDomain: { send: ({ taskId, domainId }, options?) => Promise<void> };
  setTaskRoleUser: { send: ({ taskId, role, user }, options?) => Promise<void> };
  setTaskSkill: { send: ({ taskId, skillId }, options?) => Promise<void> };
  submitTaskDeliverable: { send: ({ taskId, deliverableHash }, options?) => Promise<void> };
  submitTaskWorkRating: { send: ({ taskId, role, ratingSecret }, options?) => Promise<void> };
  revealTaskWorkRating: { send: ({ taskId, role, rating, salt }, options?) => Promise<void> };
  assignWorkRating: { send: ({ taskId }, options?) => Promise<void> };
  cancelTask: { send: ({ taskId }, options?) => Promise<void> };
  finalizeTask: { send: ({ taskId }, options?) => Promise<void> };
  claimPayout: { send: ({ taskId, role, token }, options?) => Promise<void> };
  addDomain: { send: ({ parentSkillId }, options?) => Promise<{
    skillId: number, // A skillId for this domain
    parentSkillId: number, // The parent skill id
  }> };
  addGlobalSkill: { send: ({ parentSkillId }, options?) => Promise<void> };
  claimColonyFunds: { send: ({ token }, options?) => Promise<void> };
  finalizeRewardPayout: { send: ({ payoutId }, options?) => Promise<void> };
  moveFundsBetweenPots: { send: ({ fromPot, toPot, amount, address }, options?) => Promise<void> };
  mintTokens: { send: ({ amount }, options?) => Promise<void> };
  mintTokensForColonyNetwork: { send: ({ amount }, options?) => Promise<void> };
  startNextRewardPayout: { send: ({ token }, options?) => Promise<void> };
  waiveRewardPayouts: { send: ({ numPayouts }, options?) => Promise<void> };
  setTaskBrief: { startOperation: ({ taskId, specificationHash }) => Promise<void> };
  setTaskDueDate: { startOperation: ({ taskId, dueDate }) => Promise<void> };
  setTaskEvaluatorPayout: { startOperation: ({ taskId, token, amount }) => Promise<void> };
  setTaskManagerPayout: { startOperation: ({ taskId, token, amount }) => Promise<void> };
  setTaskWorkerPayout: { startOperation: ({ taskId, token, amount }) => Promise<void> };
}
