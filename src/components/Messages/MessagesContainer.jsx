import React from 'react';

import Messages from './Messages';

import { addPrivateMessageActionCreator, addTempPrivateMessageActionCreator } from '../../redux/messagesReducer';

const MessagesContainer = props => {
  const state = props.store.getState().messages;

  const addPrivateMessage = () => props.store.dispatch(addPrivateMessageActionCreator());
  const addTempPrivateMessage = tempMessage =>
    props.store.dispatch(addTempPrivateMessageActionCreator(tempMessage));
  
  return (
    <Messages
      dialogs={state.dialogs}
      messages={state.privateMessages}
      tempPrivateMessage={state.tempPrivateMessage}
      addPrivateMessage={addPrivateMessage}
      addTempPrivateMessage={addTempPrivateMessage}
    />
  );
};

export default MessagesContainer;
