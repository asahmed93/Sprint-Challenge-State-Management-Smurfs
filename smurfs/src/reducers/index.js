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
        default: return state
    }
}