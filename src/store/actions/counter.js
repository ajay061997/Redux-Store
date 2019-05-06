import * as actionTypes from './actionTypes'

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

export const add5 = (val) => {
    return {
        type: actionTypes.ADD5,
        value: val
    }
}

export const remove5 = (val) => {
    return {
        type: actionTypes.REMOVE5,
        value: val
    }
}