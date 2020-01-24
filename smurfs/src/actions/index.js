import axios from 'axios';

export const SMURF_START = 'SMURF_START';
export const SMURF_SUCCESS = 'SMURF_SUCCESS';
export const SMURF_FAILURE = 'SMURF_FAILURE';

export const fetchSmurf = () => dispatch => {
    dispatch({ type: SMURF_START})
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res.data)
        dispatch({type: SMURF_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: SMURF_FAILURE, payload: err})
    })
}

export const ADD_SMURF = 'ADD_SMURF';
export const ADDED_SMURF = 'ADDED_SMURF';
export const ADDED_SMURF_FAILED = 'ADDED_SMURF_FAILED'

export const addSmurf = (values) => dispatch => {
    dispatch({type: ADD_SMURF});
    axios.post('http://localhost:3333/smurfs', values)
    .then(res => {
        dispatch({type: ADDED_SMURF, payload: res.values})
    })
    .catch(res => {
        dispatch({type: ADDED_SMURF_FAILED, payload: err})
    })
};