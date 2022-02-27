import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./sagas/rootSaga";
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
