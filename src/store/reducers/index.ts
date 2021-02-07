import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { searchUserReducer } from './userSearchReducer'
import { searchRepoReducer } from './repoSearchReducer'
import { loadingReducer } from './loadingReducer'
const persistConfig = {
  key: 'root',
  storage,
  whiteList: [],
  blacklist: ['loader']
}
const rootReducer = combineReducers({
  user: searchUserReducer,
  repo: searchRepoReducer,
  loader: loadingReducer
});
export const AppReducer = persistReducer(persistConfig, rootReducer);
export type AppState = ReturnType<typeof AppReducer>;