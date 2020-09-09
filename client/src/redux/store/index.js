import { applyMiddleware, createStore, combineReducers } from "redux";
import CreateSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import AboutReducer from "../reducer/AboutReducer";
import rootSaga from "../middleware";

const sagaMiddleware = CreateSagaMiddleware();
const middleware = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(
  combineReducers({
    about: AboutReducer,
  }),
  middleware
);

sagaMiddleware.run(rootSaga);

export default store;
