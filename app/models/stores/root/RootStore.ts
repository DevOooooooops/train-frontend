import { AuthStoreModel } from 'app/models/stores/AuthStore/AuthStore';
import { Instance, SnapshotOut, types } from 'mobx-state-tree';
import { AuthenticationStoreModel } from '../authentication/AuthenticationStore';
import { EpisodeStoreModel } from '../episode/EpisodeStore';

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model('RootStore').props({
  authenticationStore: types.optional(AuthenticationStoreModel, {}),
  episodeStore: types.optional(EpisodeStoreModel, {}),
  authStore: types.optional(AuthStoreModel, {}),
});

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
