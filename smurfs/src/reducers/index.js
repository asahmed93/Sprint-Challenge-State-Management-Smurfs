import {
    SMURF_START,
    SMURF_SUCCESS,
    SMURF_FAILURE
} from '../actions';

export const initialState = {
    smurfs: [{"name":"Brainey","age":200,"height":"5cm","id":0}],
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
        default: return state
    }
}