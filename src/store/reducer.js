import {
    ADD_COUNT,
    DECREMENT,
    FETCH_COUNTER_SUCCESS,
    INCREMENT, RELOAD,
    SUBTRACT
} from "./action";

const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) =>{
    console.log(action);
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: action.count
            };
        case DECREMENT:
            return {
                ...state,
                counter: action.count
            };
        case ADD_COUNT:
            return {
                ...state,
                counter: state.counter + action.value
            };
        case SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            };
        case FETCH_COUNTER_SUCCESS:
            return {
                ...state,
                counter: state.counter = action.value
            }
        case RELOAD:
            return {
                ...state,
                counter: 0
            }
        default:
            return state
    }
}

export default reducer;