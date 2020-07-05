import { combineReducers, createStore } from 'redux';

import messagesReducer from './messagesReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';


const reducers = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  users: usersReducer
});

const store = createStore(reducers);

export default store;
