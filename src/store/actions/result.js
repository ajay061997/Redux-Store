import * as actionTypes from './actionTypes'

export const saveResult = (res) => {
    return {
        type: actionTypes.ADD_DATA,
        result: res
    }
}

export const addData = (res) => {
    return (dispath, getState) => {
        setTimeout(() => {
            // const oldState = getState().ctr.counter;
            // console.log(oldState)
            dispath(saveResult(res))
        }, 2000)
    }
}

export const removeData = (id) => {
    return {
        type: actionTypes.REMOVE_DATA,
        resulElId: id
    }
}
