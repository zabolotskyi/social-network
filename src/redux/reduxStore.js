import { combineReducers, createStore } from 'redux';

import messagesReducer from './messagesReducer';
import profileReducer from './profileReducer';


const reducers = combineReducers({
  profile: profileReducer,
  messages: messagesReducer
});

const store = createStore(reducers);

export default store;
