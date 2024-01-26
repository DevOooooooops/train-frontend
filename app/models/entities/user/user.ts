import { Instance, types } from "mobx-state-tree"

export const UserModel = types.model('User').props({
  id: types.maybeNull(types.string),
  username: types.maybeNull(types.string),
  password: types.maybeNull(types.string),
});

export interface User extends Instance<typeof UserModel> {}