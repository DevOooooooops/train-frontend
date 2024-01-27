import { Instance, types } from "mobx-state-tree"

export enum Frequency {
  MONTHLY = 'MONTHLY',
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
}

export const UserModel = types.model('User').props({
  id: types.maybeNull(types.string),
  username: types.maybeNull(types.string),
  birthDate: types.maybeNull(types.string),
});

export const IncomeModel = types.model('Income').props({
  earningFrequency: types.maybeNull(types.enumeration(Object.values(Frequency))),
  amount: types.maybeNull(types.number),
  savingTarget: types.maybeNull(types.number),
})

export const AccountModel = types.model('Account').props({
  user: types.maybeNull(UserModel),
  income: types.maybeNull(IncomeModel),
  level: types.maybeNull(types.number),
  balance: types.maybeNull(types.number)
})

export interface User extends Instance<typeof UserModel> {}
export interface Account extends Instance<typeof AccountModel> {}
