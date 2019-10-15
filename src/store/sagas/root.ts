import { SagaIterator } from "redux-saga";

export function* rootSaga(): SagaIterator {
  console.log('Hello Sagas!')
}