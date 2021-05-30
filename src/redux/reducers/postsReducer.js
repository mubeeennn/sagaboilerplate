import * as types from '../types';

const postsInitialState={
    isLoading:null,
    posts:[],
    error: null
}

const postReducer=(state=postsInitialState, action)=>{
    switch(action.type){
        case types.GET_POSTS_REQUESTED:
            return {
                ...state,
                isLoading:true,
            }
        case types.GET_POSTS_SUCCEED:
            return{
                ...state,
                isLoading:false,
                posts: action.posts
            }
        case types.GET_POSTS_FAILED:
            return{
                isLoading: false,
                error: action.message
            }
        default:
            return{
                ...state,
            }
    }
}
export default postReducer;