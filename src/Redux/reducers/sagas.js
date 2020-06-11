import {takeEvery, put, call} from 'redux-saga/effects'
import {ACTION_NEW_EXHIBITIONS, FETCH_NEW_EXHIBITIONS, FETCH_POSTS, REQUEST_POSTS} from "./types";
import {hideLoader, showLoader} from "../actions";
import CommonService from "../../services/common-service";


const commonService = new CommonService()

export function* sagaWatcher() {
  yield  takeEvery(REQUEST_POSTS, sagaWorker)
  yield takeEvery(ACTION_NEW_EXHIBITIONS, sagaExhibitions)
}

function* sagaExhibitions() {
  try {
    const payload = yield call(fetchExhibitions)
    yield put({type: FETCH_NEW_EXHIBITIONS, payload})
  } catch (e) {}
}

async function fetchExhibitions() {
  const response = await commonService.getNewExhibitions()
  return response
}


function* sagaWorker() {
  try {
    yield put(showLoader())
    const payload = yield call(fetchPosts)
    yield put({ type: FETCH_POSTS, payload})
    yield put(hideLoader())
  } catch (e) {}
}

async function  fetchPosts() {
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  // return  await  response.json()
  const response = await commonService.getPosts()
  return response
}