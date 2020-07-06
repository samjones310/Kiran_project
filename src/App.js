import React from 'react';
import './App.css';
import Upload from './pages/upload';
import Dashboard from './pages/dashboard';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { createBrowserHistory as history } from 'history';

function App() {
   //console.log(email.value,password.value);
  return (
    <div className="App">
    <Router history={history} basename="/Kiran_project">
        <Route exact path="/" component={Upload} />
        <Route exact path="/dashboard/:id/:m1/:m2/:m3/:final" component={Dashboard} />
        
      </Router>
    </div>
  );
}

export default App;
