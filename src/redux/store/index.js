import applyMiddleware from "redux/src/applyMiddleware";
import createStore from "redux/src/createStore";
import combineReducers from "redux/src/combineReducers";
import CreateSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import AboutReducer from "../reducer/AboutReducer";
import rootSaga from "../middleware";
import WorkReducer from "../reducer/WorkReducer";

const sagaMiddleware = CreateSagaMiddleware();
const middleware = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(
  combineReducers({
    about: AboutReducer,
    work: WorkReducer 
  }),
  middleware
);

sagaMiddleware.run(rootSaga);

export default store;
