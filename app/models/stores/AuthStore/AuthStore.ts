import { types } from "mobx-state-tree"
import { UserModel } from "app/models/entities/user/user"
import { flow } from "mobx"
import { AuthApi } from "app/services/api/auth-api"
export const AuthStoreModel = types
  .model('SignIn')
  .props({
    accessToken: types.maybeNull(types.string),
    currentUser: types.maybeNull(UserModel),
  }).actions(self => ({
    getToken: flow(function* (username: string, password: string) {
      const signInApi = new AuthApi();
      try {
        const getTokenResult = yield signInApi.getToken(username, password);
        console.tron.log(getTokenResult)
      } catch (e) {
        console.tron.log(e);
      }
    }),
  })).actions(self => ({
    whoami: flow(function* (accessToken: string) {
      console.tron.log('WHO AM I ?');
      const signInApi = new AuthApi();
      try {
        const whoAmiResult = yield signInApi.whoami(self.accessToken ?? '');
        self.currentUser = whoAmiResult.user;
      } catch (e) {
        console.tron.log('Handle who am I error here');
      }
    }),
  }));