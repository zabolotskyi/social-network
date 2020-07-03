import React from 'react';

import Messages from './Messages';

import { addPrivateMessageActionCreator, addTempPrivateMessageActionCreator } from '../../redux/messagesReducer';
import { StoreContext } from '../../storeContext';

const MessagesContainer = () => (
  <StoreContext.Consumer>
    {store => {
      const state = store.getState().messages;

      const addPrivateMessage = () => store.dispatch(addPrivateMessageActionCreator());
      const addTempPrivateMessage = tempMessage => store.dispatch(addTempPrivateMessageActionCreator(tempMessage));

      return (
        <Messages
          dialogs={state.dialogs}
          messages={state.privateMessages}
          tempPrivateMessage={state.tempPrivateMessage}
          addPrivateMessage={addPrivateMessage}
          addTempPrivateMessage={addTempPrivateMessage}
        />
      );
    }}
  </StoreContext.Consumer>
);

export default MessagesContainer;
