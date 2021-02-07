import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk';
import { AppReducer } from './reducers';

import { composeWithDevTools } from 'redux-devtools-extension';
export const store = createStore(AppReducer, composeWithDevTools(applyMiddleware(thunk)))
export const persistor = persistStore(store)
