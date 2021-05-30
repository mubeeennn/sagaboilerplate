import * as types from '../types';
const getPosts=(posts)=>{
    return(
        {
            type:types.GET_POSTS_REQUESTED,
            payload: posts
        }
    )
}
export default getPosts;