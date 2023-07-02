import EmailList from "./components/EmailList";
import './App.css';
import { READ, UNREAD } from './constants';
import { useState } from 'react';
import messagesList from "./data/messages";
import Buttons from "./components/Buttons";

function App() {
  const [msg, setMsg] = useState(messagesList);

  const setMessageStatus = (msgId, newStatus) => {
    const updateMsgs = msg.map((currMsg) => {
      if (currMsg.id === msgId) {
        return { ...currMsg, status: newStatus }
      }
      return currMsg;
    });
    setMsg(updateMsgs);
  }

  const read = () => {
    const allRead = msg.map((m) => ({ ...m, status: READ }));
    setMsg(allRead);
  };

  const unread = () => {
    const allUnread = msg.map((m) => ({ ...m, status: UNREAD }));
    setMsg(allUnread);
  };

  return (
    <div className="App">
      <header>
        <h1>TrybeMail</h1>
      </header>

      <Buttons
        read={ read }
        unread={ unread }
      />

      <EmailList
        messages={msg}
        setMessageStatus={setMessageStatus}
      />
    </div>
  );
}

export default App;
