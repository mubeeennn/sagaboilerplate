import {createStore, compose, applyMiddleware} from "redux"
import rootReducer from './reducers'
import rootSaga from './sagas'
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware= createSagaMiddleware()
const store=compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension && window.devToolsExtension(),)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);
export default store;