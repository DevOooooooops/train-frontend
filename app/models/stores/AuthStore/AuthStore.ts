import { types } from "mobx-state-tree"
import { Account, AccountModel, User, UserModel } from "app/models/entities/user/user"
import { flow } from "mobx"
import { AuthApi } from "app/services/api/auth-api"
import { Transaction, TransactionModel } from "app/models/entities/transaction/transaction"
import { TransactionApi } from "app/services/api/transaction-api"

export const AuthStoreModel = types
  .model('Auth')
  .props({
    accessToken: types.maybeNull(types.string),
    currentUser: types.maybeNull(UserModel),
    currentAccount: types.maybeNull(AccountModel),
    transactions: types.optional(types.array(TransactionModel), []),
  }).actions(self => ({
    reset: () => {
      self.accessToken = null;
      self.currentUser = null;
      self.currentAccount = null;
    },
  })).actions(self => ({
    catchOrThrow: (error: Error) => {
      const errorMessage = error.message;

      if (errorMessage === 'forbidden') {
        return self.reset();
      }
    },
  })).actions((self) => ({
    setAccessToken(token: string) {
      self.accessToken = token;
    },
  })).actions((self) => ({
    setUser(user: User) {
      self.currentUser = user;
    },
  })).actions((self) => ({
    setAccount(account: Account) {
      self.currentAccount = account;
    },
  })).actions(self => ({
    logout: flow(function* () {
      self.reset();
    }),
  })).actions(self => ({
    signUp: flow(function* (birthdate: string, username: string, password: string) {
      const signUpApi = new AuthApi();
      try {
        const payload = {
          birthDate: birthdate,
          username: username,
          password: password,
        }
        const getTokenResult = yield signUpApi.signUp(payload)
        self.setUser(getTokenResult.user)
      } catch (e) {
        console.tron.log(e);
      }
    }),
  })).actions(self => ({
    updateInfos: flow(function* (payload: any) {
      const signUpApi = new AuthApi();
      try {
        const getAccountResult = yield signUpApi.updateUser(payload, self.accessToken ?? '')
        self.setAccount(getAccountResult.account)
      } catch (e) {
        console.tron.log(e);
      }
    }),
  })).actions(self => ({
    login: flow(function* (username: string, password: string) {
      const signInApi = new AuthApi();
      try {
        const getTokenResult = yield signInApi.getToken(username, password)
        self.setAccessToken(getTokenResult.accessToken)
        const getWhoAmIResult = yield signInApi.whoami(getTokenResult.accessToken);
        self.setUser({id: getWhoAmIResult.user.id, username: getWhoAmIResult.user.username, birthDate: getWhoAmIResult.user.birthDate})
        const getUserResult = yield signInApi.getUser(getTokenResult.accessToken);
        self.setAccount({
          user:
            {
              id: getUserResult.account.user.id,
              username: getUserResult.account.user.username,
              birthDate: getUserResult.account.user.birthDate
            },
          income:
            {
              earningFrequency: getUserResult.account.income.earningFrequency,
              amount: getUserResult.account.income.amount,
              savingTarget: getUserResult.account.income.savingTarget
            },
          level: getUserResult.account.level,
          balance: getUserResult.account.balance
        })
      } catch (e) {
        console.tron.log(e);
      }
    }),
  }))
  .actions(self => ({
    sesTransactions(transactions: Transaction[]) {
      self.transactions.replace(transactions);
    },
  }))
  .actions(self => ({
    getTransaction: flow(function* (username: string, password: string) {
      const transactionApi = new TransactionApi();
      try {
        const getTokenResult = yield transactionApi.getAll(self.accessToken || '');
        self.sesTransactions(getTokenResult.data);
      } catch (e) {
        console.tron.log(e);
      }
    }),
  }));