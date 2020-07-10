import React from 'react';
import { connect } from 'react-redux';

import Messages from './Messages';

import { addPrivateMessage, addTempPrivateMessage } from '../../redux/messagesReducer';

const MessagesContainer = props => (
  <Messages {...props} />
);

const mapStateToProps = state => {
  const { dialogs, privateMessages, tempPrivateMessage } = state.messages;
  
  return {
    dialogs,
    privateMessages,
    tempPrivateMessage
  }
};

const mapDispatchToProps = {
  addPrivateMessage,
  addTempPrivateMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);
