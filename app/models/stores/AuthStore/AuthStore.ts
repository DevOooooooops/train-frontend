import { types } from 'mobx-state-tree';
import { Account, AccountModel, User, UserModel } from 'app/models/entities/user/user';
import { flow } from 'mobx';
import { AuthApi } from 'app/services/api/auth-api';
import { Transaction, TransactionModel } from 'app/models/entities/transaction/transaction';
import { TransactionApi } from 'app/services/api/transaction-api';
import { Quest, QuestModel } from 'app/models/entities/quest/Quest';
import { QuestHistory, QuestHistoryModel } from 'app/models/entities/quest/QuestHistory';
import { QuestApi } from 'app/services/api/quest-api';
import { QuestHistoryApi } from 'app/services/api/quest-history-api';

export const AuthStoreModel = types
  .model('Auth')
  .props({
    accessToken: types.maybeNull(types.string),
    currentUser: types.maybeNull(UserModel),
    currentAccount: types.maybeNull(AccountModel),
    transactions: types.optional(types.array(TransactionModel), []),
    currentQuest: types.optional(QuestModel, {}),
    questHistory: types.optional(types.array(QuestHistoryModel), []),
  })
  .actions(self => ({
    reset: () => {
      self.accessToken = null;
      self.currentUser = null;
      self.currentAccount = null;
    },
  }))
  .actions(self => ({
    catchOrThrow: (error: Error) => {
      const errorMessage = error.message;

      if (errorMessage === 'forbidden') {
        return self.reset();
      }
    },
  }))
  .actions(self => ({
    setAccessToken(token: string) {
      self.accessToken = token;
    },
  }))
  .actions(self => ({
    setUser(user: User) {
      self.currentUser = user;
    },
  }))
  .actions(self => ({
    setAccount(account: Account) {
      self.currentAccount = account;
    },
  }))
  .actions(self => ({
    logout: flow(function* () {
      self.reset();
    }),
  }))
  .actions(self => ({
    setTransactions(transactions: Transaction[]) {
      self.transactions.replace(transactions);
    },
  }))
  .actions(self => ({
    setQuest(quest: Quest) {
      self.currentQuest = quest;
    },
  }))
  .actions(self => ({
    setQuestHistory(questHistory: QuestHistory[]) {
      self.questHistory.replace(questHistory);
    },
  }))
  .actions(self => ({
    signUp: flow(function* (birthdate: string, username: string, password: string) {
      const signUpApi = new AuthApi();
      try {
        const payload = {
          birthDate: birthdate,
          username: username,
          password: password,
        };
        const getTokenResult = yield signUpApi.signUp(payload);
        self.setUser(getTokenResult.user);
      } catch (e) {
        console.tron.log(e);
      }
    }),
  }))
  .actions(self => ({
    updateInfos: flow(function* (payload: any) {
      const signUpApi = new AuthApi();
      try {
        const getAccountResult = yield signUpApi.updateUser(payload, self.accessToken ?? '');
        self.setAccount(getAccountResult.account);
      } catch (e) {
        console.tron.log(e);
      }
    }),
  }))
  .actions(self => ({
    login: flow(function* (username: string, password: string) {
      const signInApi = new AuthApi();
      try {
        const getTokenResult = yield signInApi.getToken(username, password);
        self.setAccessToken(getTokenResult.accessToken);
        const getWhoAmIResult = yield signInApi.whoami(getTokenResult.accessToken);
        self.setUser({ id: getWhoAmIResult.user.id, username: getWhoAmIResult.user.username, birthDate: getWhoAmIResult.user.birthDate });
        const getUserResult = yield signInApi.getUser(getTokenResult.accessToken);
        self.setAccount({
          user: {
            id: getUserResult.account.user.id,
            username: getUserResult.account.user.username,
            birthDate: getUserResult.account.user.birthDate,
          },
          income: {
            earningFrequency: getUserResult.account.income.earningFrequency,
            amount: getUserResult.account.income.amount,
            savingTarget: getUserResult.account.income.savingTarget,
          },
          level: getUserResult.account.level,
          balance: getUserResult.account.balance,
        });
        const transactionApi = new TransactionApi();
        const getTransactionResult = yield transactionApi.getTransactions(self.accessToken || '');
        try {
          self.setTransactions(getTransactionResult.transaction);
        } catch (e) {
          // @ts-ignore
          console.tron.log(e.message);
        }
      } catch (e) {
        console.tron.log(e);
      }
    }),
  }))
  .actions(self => ({
    getUser: flow(function* () {
      const signUpApi = new AuthApi();
      try {
        const getUserResult = yield signUpApi.getUser(self.accessToken ?? '');
        self.setAccount({
          user: {
            id: getUserResult.account.user.id,
            username: getUserResult.account.user.username,
            birthDate: getUserResult.account.user.birthDate,
          },
          income: {
            earningFrequency: getUserResult.account.income.earningFrequency,
            amount: getUserResult.account.income.amount,
            savingTarget: getUserResult.account.income.savingTarget,
          },
          level: getUserResult.account.level,
          balance: getUserResult.account.balance,
        });
        const transactionApi = new TransactionApi();
        const getTransactionResult = yield transactionApi.getTransactions(self.accessToken || '');
        try {
          self.setTransactions(getTransactionResult.transaction);
        } catch (e) {
          // @ts-ignore
          console.tron.log(e.message);
        }
      } catch (e) {
        console.tron.log(e);
      }
    }),
  }))
  .actions(self => ({
    getQuest: flow(function* () {
      const questApi = new QuestApi();
      const res = yield questApi.getQuest(self.accessToken ?? '', self.currentAccount?.level || 1);
      try {
        self.setQuest(res.quest);
      } catch (e) {
        console.tron.log(e);
      }
    }),
    getQuestHistory: flow(function* () {
      const questHistoryApi = new QuestHistoryApi();
      try {
        const res = yield questHistoryApi.getAll(self.accessToken ?? '', self.currentUser?.id || '');
        self.setQuestHistory(res.questHistories);
      } catch (e) {
        console.tron.log(e);
      }
    }),
  }))
  .actions(self => ({
    getTransaction: flow(function* () {
      const transactionApi = new TransactionApi();
      try {
        const getTokenResult = yield transactionApi.getTransactions(self.accessToken || '');
        yield self.getQuest();
        yield self.getQuestHistory();
        try {
          self.setTransactions(getTokenResult.transaction);
        } catch (e) {
          // @ts-ignore
          console.tron.log(e.message);
        }
      } catch (e) {
        console.tron.log(e);
      }
    }),
  }))
  .actions(self => ({
    createTransaction: flow(function* (transactionData: Transaction) {
      const transactionApi = new TransactionApi();
      try {
        yield transactionApi.createTransaction(self.accessToken ?? '', transactionData);
      } catch (e) {
        console.tron.log(e);
      }
    }),
  }));
