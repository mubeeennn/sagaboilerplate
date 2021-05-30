import {call, put, takeEvery} from 'redux-saga/effects';


const apiUrl= "https://jsonplaceholder.typicode.com/posts"

const getPosts=()=>{
    return(fetch(apiUrl,
        {
            method:"GET",
            headers: {
                'Content-type': 'application/json'
            }
        }
    )
    .then(response=>response.json())
    .catch(error=>{throw error}))
}

function* sagaWorkerPosts (action){
    try{
        
        const posts= yield call(getPosts)
        yield put({type:"GET_POSTS_SUCCEED", posts: posts})
    }
    catch(e){
        yield put({type:"GET_POSTS_FAILED", message: e.message})
    }
}

function* sagaWatcherPosts(){
    
    yield takeEvery("GET_POSTS_REQUESTED", sagaWorkerPosts)
}

export default sagaWatcherPosts;