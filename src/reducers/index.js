import * as actions from '../actions'
const initialState = {
    text: '',
    typing: false,
    messArray: [],
    currUser: '',
}
//could also use ... spread operator instead of object.assign
export const storyReducer = (state=initialState, action) => {
    if(action.type === actions.TYPING_MESSAGE)  {
        return Object.assign({}, state, {
            typing: !typing
        })
    }   
    if(action.type === actions.TYPING_MESSAGE)  {
        return {
            ...state,
            typing: !state.typing
        }
    }  
}

