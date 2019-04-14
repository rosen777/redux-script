import { ADD_PERSON } from "../constants/action-types"

const initialState = {
    people: []
}

function rootReducer (state = initialState, action) {
    if (action.type === ADD_PERSON) {
        return Object.assign({}, state, {
            people: state.people.concat(action.payload)
        })
    }
    return state
}

export default rootReducer 