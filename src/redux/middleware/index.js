import { all } from "redux-saga/effects";

import { watchAddWorkSaga } from "./WorkSagas";

function* rootSaga() {
  yield all([watchAddWorkSaga()]);
}

export default rootSaga;
