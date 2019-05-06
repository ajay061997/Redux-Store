export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD5 = 'ADD5';
export const REMOVE5 = 'REMOVE5';
export const ADD_DATA = 'ADD_DATA';
export const REMOVE_DATA = 'REMOVE_DATA';

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const add5 = (val) => {
    return {
        type: ADD5,
        value: val
    }
}

export const remove5 = (val) => {
    return {
        type: REMOVE5,
        value: val
    }
}

export const saveResult = (res) => {
    return {
        type: ADD_DATA,
        result: res
    }
}

export const addData = (res) => {
    return (dispath) => {
        setTimeout(() => {
            dispath(saveResult(res))
        }, 2000)
    }
}

export const removeData = (id) => {
    return {
        type: REMOVE_DATA,
        resulElId: id
    }
}

