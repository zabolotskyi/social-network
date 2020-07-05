import React from 'react';
import { connect } from 'react-redux';

import Messages from './Messages';

import { addPrivateMessageActionCreator, addTempPrivateMessageActionCreator } from '../../redux/messagesReducer';

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

const mapDispatchToProps = dispatch => ({
  addPrivateMessage: () => dispatch(addPrivateMessageActionCreator()),
  addTempPrivateMessage: tempMessage => dispatch(addTempPrivateMessageActionCreator(tempMessage))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);
