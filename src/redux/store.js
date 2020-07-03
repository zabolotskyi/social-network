import messagesReducer from './messagesReducer';
import profileReducer from './profileReducer';

const store = {
  _callSubscriber() {
    console.log('Rerender!!!');
  },
  _state: {
    profile: {
      posts: [
        { id: 1, message: "First comment", likes: 10 },
        { id: 2, message: "Stop spamming!", likes: 23 }
      ],
      tempPost: ''
    },
    messages: {
      dialogs: [
        { id: 1, name: 'User 1', messages: 2 },
        { id: 2, name: 'User 2', messages: 21 },
        { id: 3, name: 'User 3', messages: 3 },
        { id: 4, name: 'User 4', messages: 1 },
        { id: 5, name: 'User 5', messages: 2 },
        { id: 6, name: 'User 6', messages: 3000 },
        { id: 7, name: 'User 7', messages: 2 },
        { id: 8, name: 'User 8', messages: 2 },
      ],
      privateMessages: [
        { id: 1, name: 'User 1', message: 'hi' },
        { id: 2, name: 'User 2', message: 'bye' },
      ],
      tempPrivateMessage: ''
    }
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.messages = messagesReducer(this._state.messages, action);

    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
};

export default store;
