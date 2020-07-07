import React from 'react';
import { connect } from 'react-redux';

import Messages from './Messages';

import { addPrivateMessage, addTempPrivateMessage } from '../../redux/messagesReducer';

const MessagesContainer = props => (
  <Messages
    dialogs={props.dialogs}
    privateMessages={props.privateMessages}
    tempPrivateMessage={props.tempPrivateMessage}
    addPrivateMessage={props.addPrivateMessage}
    addTempPrivateMessage={props.addTempPrivateMessage}
  />
);

const mapStateToProps = state => ({
  dialogs: state.messages.dialogs,
  privateMessages: state.messages.privateMessages,
  tempPrivateMessage: state.messages.tempPrivateMessage
});

const mapDispatchToProps = {
  addPrivateMessage,
  addTempPrivateMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);
