import { Instance, types } from 'mobx-state-tree';

export const QuestModel = types.model('TransactionStore').props({
  id: types.maybeNull(types.string),
  name: types.maybeNull(types.string),
  objectiveDescription: types.maybeNull(types.string),
  amountObjective: types.maybeNull(types.number),
  points: types.maybeNull(types.number),
  requiredLevel: types.maybeNull(types.number),
});

export interface Quest extends Instance<typeof QuestModel> {}
