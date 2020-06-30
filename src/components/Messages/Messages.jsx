import React from 'react';

import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

import styles from './Messages.module.css';

let dialogsData = [
  { id: 1, name: 'User 1', messages: 2 },
  { id: 2, name: 'User 2', messages: 21 },
  { id: 3, name: 'User 3', messages: 3 },
  { id: 4, name: 'User 4', messages: 1 },
  { id: 5, name: 'User 5', messages: 2 },
  { id: 6, name: 'User 6', messages: 3000 },
  { id: 7, name: 'User 7', messages: 2 },
  { id: 8, name: 'User 8', messages: 2 },
];

let renderDialogs = dialogsData.map(dialog => (
  <Dialog key={dialog.id} id={dialog.id} name={dialog.name} messages={dialog.messages} />
));

const Messages = () => (
  <div className={styles.messages_container}>
    <div className={styles.dialogs}>
      {renderDialogs}
    </div>
    <div className={styles.messages}>
      <Message id={dialogsData[0].id} name={dialogsData[0].name} messages={dialogsData[0].messages} />
      <Message id={dialogsData[0].id} name={dialogsData[0].name} messages={dialogsData[0].messages} />
      <Message id={dialogsData[0].id} name={dialogsData[0].name} messages={dialogsData[0].messages} />
      <input className={styles.write_message} type="text" placeholder="Write a message..." />
    </div>
    {/* <div className={styles.empty_state}>Please select a chat to start messaging</div> */}
  </div>
);

export default Messages;
