import React, { useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import SignupForm from './components/SignupForm';
import UsersList from './components/UsersList';
import Navbar from './components/Navbar';
import history from './history';

function App() {
  
  const [userList, setUserList] = useState([])
  return (
    <div className="container">
      {/* Using router to handle navigation between signup page and user details page */}
      <Router history={history}>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={() => <SignupForm setUserList={setUserList}/>}></Route>
        <Route path="/users" component={() => <UsersList userList={userList} />}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
