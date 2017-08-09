
let initialState = 0

export default function reducer(state=initialState, action) {
    let newState = state

    if (action.type == 'INCREMENT_COUNT') {
        newState = state + 1
    } 

    return newState
}
