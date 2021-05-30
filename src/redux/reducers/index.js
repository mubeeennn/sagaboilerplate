import {combineReducers} from "redux";
import userReducer from './usersReducer';
import postReducer from './postsReducer';

const rootReducer= combineReducers({
    user: userReducer,
    posts: postReducer,
})

export default rootReducer;