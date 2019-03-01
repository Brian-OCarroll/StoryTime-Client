import * as actions from '../actions'
const initialState = {
    text: '',
    messArray: [],
    currUser: '',
}
export const storyReducer = (state=initialState, action) => {
    if(action.type === actions.TYPING_MESSAGE)  {
        return Object.assign({}, state, {
            
        })
    }   
}

