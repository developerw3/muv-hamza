import * as Actions from '../actions'

const initialState = {
    isShow: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case Actions.SPINNER_HANDLE:
            return action.payload
        default: 
            return state
    }
}