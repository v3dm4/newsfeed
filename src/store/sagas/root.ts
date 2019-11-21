import { SagaIterator } from "redux-saga";
import { put, takeEvery, all } from "redux-saga/effects";

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export function* helloSaga(): SagaIterator {
  console.log("Hello Sagas!");
}

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "INCREMENT" });
}

export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
