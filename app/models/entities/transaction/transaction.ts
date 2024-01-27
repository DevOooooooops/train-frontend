import { Instance, types } from 'mobx-state-tree';

export enum TransactionType {
  INCOME = 'INCOME',
  OUTCOME = 'OUTCOME',
}

export const TransactionModel = types.model('TransactionStore').props({
  id: types.maybeNull(types.string),
  type: types.maybeNull(types.enumeration(Object.values(TransactionType))),
  amount: types.maybeNull(types.number),
  reason: types.maybeNull(types.string),
  creationDateTime: types.maybeNull(types.string),
});

export interface Transaction extends Instance<typeof TransactionModel> {}
