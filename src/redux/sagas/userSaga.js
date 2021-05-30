import {call, put, takeEvery} from 'redux-saga/effects';

const apiUrl= "https://jsonplaceholder.typicode.com/users";

function getApi(){
    return(
        fetch(apiUrl,{
            method:"GET",
            header:{
                "Content-type": 'application/json'
            }
        })
        .then(response=>response.json())
        .catch(error=>{throw error})
    )
}

// saga worker
function* fetchUsers(action){
    try{
        const users= yield call(getApi);
        yield put({type:'GET_USER_SUCCEED', users: users});
       
    }
    catch(e){
        yield put({type:"GET_USER_FAILED", message: e.message})
    }
}
// saga watcher
function* userSaga(){
    yield takeEvery('GET_USERS_REQUESTED',fetchUsers);
    
}

export default userSaga;