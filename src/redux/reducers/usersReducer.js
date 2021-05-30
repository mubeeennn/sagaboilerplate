import * as types from '../types';

const initialState= {
    users: [],
    isLoading: null,
    error: null

}

export default function userReducer(state= initialState, action){

    switch(action.type){
        case types.GET_USERS_REQUESTED:
            return({
                ...state,
                isLoading: true
            })
        case types.GET_USERS_SUCCEED:
            return{
                ...state,
                isLoading:false,
                users: action.users
            }
        case types.GET_USERS_FAILED:
            return{
                isLoading:false,
                error:action.message
            }
        default:
            return state;
    }
}