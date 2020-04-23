import { createStore, applyMiddleware } from "redux";
//  using logger to debug redux in development mode
import logger from "redux-logger";
import thunk from 'redux-thunk'
// this to persist the store
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// this presistence version of our store
export const persistor = persistStore(store);
export default { store, persistor };