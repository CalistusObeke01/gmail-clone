import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header'
import Sidebar from './Sidebar'
import SendMail from './SendMail'
import Mail from './Mail'
import EmailList from './EmailList'
import { useSelector } from 'react-redux'
import { selectSendMessageIsOpen } from './features/mail/mailSlice'
import './App.css';

function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)

  return (
    <Router>
      <div className='app'>
        <Header />
        <div className='app_body'>
          <Sidebar />

          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
        { sendMessageIsOpen && <SendMail />}
      </div>
    </Router>
  );
}

export default App;
