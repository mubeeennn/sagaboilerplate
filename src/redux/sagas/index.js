import { all } from 'redux-saga/effects'
import userSaga from './userSaga';
import sagaWatcherPosts from './postsSaga'
export default function* rootSaga(){
    yield all([
        userSaga(),
        sagaWatcherPosts(),
    ])
}