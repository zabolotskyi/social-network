import React from 'react';

import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

import styles from './Messages.module.css';

const renderDialogs = dialogs => dialogs.map(dialog => {
  const {id, name, messages } = dialog;

  return (
    <Dialog key={id} id={id} name={name} messages={messages} />
  );
});

const renderMessages = messages => messages.map(msg => {
  const {id, name, message } = msg;

  return (
    <Message key={id} id={id} name={name} message={message} />
  );
});

const Messages = props => {
  const onAddTempPrivateMessage = event => {
    const tempMessage = event.target.value
    props.addTempPrivateMessage(tempMessage);
  };

  const onAddPrivateMessage = () => {
    props.addPrivateMessage();
  };

  return (
    <div className={styles.messages_container}>
      <div className={styles.dialogs}>
        {renderDialogs(props.dialogs)}
      </div>
      <div className={styles.messages}>
        <div className={styles.messages_list}>
          {renderMessages(props.privateMessages)}
        </div>
        <div className={styles.new_message}>
          <input
            className={styles.write_message}
            type="text"
            placeholder="Write a message..."
            onChange={onAddTempPrivateMessage}
            value={props.tempPrivateMessage}
          />
          <button className={styles.send} onClick={onAddPrivateMessage}>Send</button>
        </div>
      </div>
      {/* <div className={styles.empty_state}>Please select a chat to start messaging</div> */}
    </div>
  );
};

export default Messages;
