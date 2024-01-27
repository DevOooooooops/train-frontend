import { types } from "mobx-state-tree"
import { Account, AccountModel, User, UserModel } from "app/models/entities/user/user"
import { flow } from "mobx"
import { AuthApi } from "app/services/api/auth-api"

export const AuthStoreModel = types
  .model('Auth')
  .props({
    accessToken: types.maybeNull(types.string),
    currentUser: types.maybeNull(UserModel),
    currentAccount: types.maybeNull(AccountModel)
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
          birthdate: birthdate,
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
    login: flow(function* (username: string, password: string) {
      const signInApi = new AuthApi();
      try {
        const getTokenResult = yield signInApi.getToken(username, password)
        self.setAccessToken(getTokenResult.accessToken)
        const getWhoAmIResult = yield signInApi.whoami(getTokenResult.accessToken);
        self.setUser({id: getWhoAmIResult.user.id, username: getWhoAmIResult.user.username, password: getWhoAmIResult.user.password})
        const getUserResult = yield signInApi.getUser(getTokenResult.accessToken);
        self.setAccount({
          user:
            {
              id: getUserResult.account.id,
              username: getUserResult.account.username,
              password: getUserResult.account.password
            },
          income:
            {
              earningFrequency: getUserResult.account.earningFrequency,
              amount: getUserResult.account.amount,
              savingTarget: getUserResult.account.savingTarget
            },
          level: getUserResult.account.level,
          balance: getUserResult.account.balance
        })
      } catch (e) {
        console.tron.log(e);
      }
    }),
  }));