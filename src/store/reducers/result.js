import * as actionTypes from '../action';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        
        case actionTypes.ADD_DATA:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
        case actionTypes.REMOVE_DATA:
            const updatedArray = state.results.filter(result => result.id !== action.resulElId);
            return {
                ...state,
                results: updatedArray
            }
        // default:
        //     alert('default')
    }

    return state;


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