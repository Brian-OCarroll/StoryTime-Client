import {createStore} from 'redux'

import {storyReducer} from './reducers';

export default createStore(storyReducer);