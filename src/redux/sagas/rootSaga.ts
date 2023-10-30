import * as ACTION from "../../constants/constants";
import authSaga from "./authSaga";
import { takeLatest } from "redux-saga/effects";

function* rootSaga() {
  yield takeLatest([ACTION.SIGNUP], authSaga);
}

export default rootSaga;
