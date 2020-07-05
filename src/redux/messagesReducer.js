const ADD_PRIVATE_MESSAGE = 'messages/ADD_PRIVATE_MESSAGE';
const ADD_TEMP_PRIVATE_MESSAGE = 'messages/ADD_TEMP_PRIVATE_MESSAGE';

const initialState = {
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
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRIVATE_MESSAGE:
      const newMessage = { id: 3, name: 'User 3', message: state.tempPrivateMessage };

      return {
        ...state,
        privateMessages: [...state.privateMessages, newMessage],
        tempPrivateMessage: ''
      };

    case ADD_TEMP_PRIVATE_MESSAGE:
      return {
        ...state,
        tempPrivateMessage: action.payload.tempMessage
      };

    default:
      return state;
  }
};

export const addPrivateMessageActionCreator = () => ({
  type: ADD_PRIVATE_MESSAGE
});

export const addTempPrivateMessageActionCreator = tempMessage => ({
  type: ADD_TEMP_PRIVATE_MESSAGE,
  payload: { tempMessage }
});

export default messagesReducer;
