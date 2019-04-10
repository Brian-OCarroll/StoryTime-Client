import {createStore} from 'redux'

import {storyReducer} from './reducers';

const io = store => {
    return next => {
        return action => {
            console.log('middleware', action)
            const result = next(action);
            return result;
        }
    }
}
export default createStore(storyReducer);