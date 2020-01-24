import {
    SMURF_START,
    SMURF_SUCCESS,
    SMURF_FAILURE,
    ADD_SMURF,
    ADDED_SMURF,
    ADDED_SMURF_FAILED
} from '../actions';

export const initialState = {
    smurfs: [{"name":"Brainey","age":200,"height":"5","id":0}],
    isFetching: false,
    error: ''
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case SMURF_START: 
            return {
                ...state,
                isFetching: true
            }
        case SMURF_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                error: ''
            }
        case SMURF_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case ADD_SMURF:
            return {
                ...state,
                isFetching: true
            }
        case ADDED_SMURF:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            }
        case ADDED_SMURF_FAILED:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        default: return state
    }
}