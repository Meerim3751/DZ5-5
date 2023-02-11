import axios from "axios";
import instance from "../axios.js";

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_COUNT = 'ADD_COUNT';
export const SUBTRACT = 'SUBTRACT';
export const RELOAD = 'RELOAD'

export const FETCH_COUNTER_REQUEST = 'FETCH_COUNTER_REQUEST';
export const FETCH_COUNTER_SUCCESS = 'FETCH_COUNTER_SUCCESS';
export const FETCH_COUNTER_ERROR = 'FETCH_COUNTER_ERROR';

export const fetchCounterRequest = () =>{
    return{type: FETCH_COUNTER_REQUEST};
}
export const fetchCounterSuccess = (value) =>{
    return{type: FETCH_COUNTER_SUCCESS, value};
}
export const fetchCounterError = () =>{
    return{type: FETCH_COUNTER_ERROR};
};

const baseURL = 'https://63da3f0f2af48a60a7c8b948.mockapi.io'

export const incrementCounter = () => {
    return async dispatch => {
        await axios.get(baseURL+'/counter')
            .then(async res => {
                const count = res.data[0].counter + 1;
                await axios.put(baseURL+'/counter/1', {counter: count});
                dispatch({type: INCREMENT, count})
            })
    }
}
export const decrementCounter = () => {
    return async dispatch => {
        await axios.get(baseURL+'/counter')
            .then(async res => {
                const count = res.data[0].counter - 1;
                await axios.put(baseURL+'/counter/1', {counter: count});
                dispatch({type: DECREMENT, count})
            })
    }
}

export const reloadCounter = () => {
    return async dispatch => {
        await axios.get(baseURL+'/counter')
            .then(async res => {
                const count = res.data[0].counter - res.data[0].counter;
                await axios.put(baseURL+'/counter/1', {counter: count});
                dispatch({type: DECREMENT, count})
            })
        dispatch({
            type:RELOAD
        })
    }
}

export const addCounter = (value) => {
    return async dispatch => {
        await axios.get(baseURL+'/counter')
            .then(async res => {
                const count = res.data[0].counter + 5;
                await axios.put(baseURL +'/counter/1', {counter: count});
                dispatch({type: ADD_COUNT, value})
            })
    }
}
export const subtractCounter = (value) => {
    return async dispatch => {
        await axios.get(baseURL+'/counter')
            .then(async res => {
                const count = res.data[0].counter - 5;
                await axios.put(baseURL+'/counter/1', {counter: count});
                dispatch({type: SUBTRACT, value})
            })
    }
}

export const fetchCounter = () => {
    return dispatch => {
        dispatch(fetchCounterRequest());
        axios.get(baseURL+'/counter').then(res =>{
            dispatch(fetchCounterSuccess(res.data[0].counter))
        }, error => {
            dispatch(fetchCounterError())
        })
    }
}

