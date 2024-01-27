import { Transaction, TransactionModel } from 'app/models/entities/transaction/transaction';
import { withRootStore } from 'app/models/extensions/with-root-store';
import { TransactionApi } from 'app/services/api/transaction-api';
import { flow } from 'mobx';
import { types } from 'mobx-state-tree';

export const TransactionStoreModel = types
  .model('Transaction')
  .props({
    transactions: types.optional(types.array(TransactionModel), []),
  })
  .extend(withRootStore)
  .actions(self => ({
    sesTransactions(transactions: Transaction[]) {
      self.transactions.replace(transactions);
    },
  }))
  .actions(self => ({
    getTransaction: flow(function* (username: string, password: string) {
      const transactionApi = new TransactionApi();
      try {
        const getTokenResult = yield transactionApi.getAll(self.rootStore.authStore.accessToken || '');
        self.sesTransactions(getTokenResult.data);
      } catch (e) {
        console.tron.log(e);
      }
    }),
  }));
