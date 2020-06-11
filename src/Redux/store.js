import reducer from "./reducers";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";

import {sagaWatcher} from './reducers/sagas'
import createSagaMiddleware from 'redux-saga'

const saga = createSagaMiddleware()

const store = createStore(reducer, compose(
  applyMiddleware(
    thunk,  saga
  ),
))

saga.run(sagaWatcher)


export default  store;