import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../utility'

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.INCREMENT:

            // const newState = Object.assign({}, state);
            // newState.counter = state.counter + 1;
            // return newState
            return updateObject(state, {counter: state.counter + 1})

        case actionTypes.DECREMENT:
            return updateObject(state, {counter: state.counter - 1})
            
        case actionTypes.ADD5:
            return updateObject(state, {counter: state.counter + action.value})

        case actionTypes.REMOVE5:
            return updateObject(state, {counter: state.counter - action.value})
            // return {
            //     ...state,
            //     counter: state.counter - action.value
            // }
        default :
            return state;
    }

  


    // if(action.type === 'INCREMENT') {
    //     return {
    //         counter: state.counter + 1
    //     }
    // }
    // if(action.type === 'DECREMENT') {
    //     return {
    //         counter: state.counter - 1
    //     }
    // }
    // if(action.type === 'ADD5') {
    //     return {
    //         counter: state.counter + action.value
    //     }
    // }
    // if(action.type === 'REMOVE5') {
    //     return {
    //         counter: state.counter - action.value
    //     }
    // }

    // return state;
}

export default reducer;