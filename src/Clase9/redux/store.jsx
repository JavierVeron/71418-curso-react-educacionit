import { createStore, applyMiddleware } from "redux";
import CounterReducer from "./CounterReducer";
import createSagaMiddleware from "redux-saga"
import { rootSaga } from "./CounterSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(CounterReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;