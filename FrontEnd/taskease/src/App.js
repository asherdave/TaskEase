import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Signup from './Components/signup.js';
import Login from './Components/login.js';
import Dashboard from './Components/dashboard.js';
import AddPopup from './Components/addpopup.js';
import DeletePopup from './Components/deletepopup.js';
import { Active } from './Components/active.js';
import { Completed } from './Components/completed.js';
import { RecentlyDeleted } from './Components/recentlydeleted.js';
import { CurrentDetail } from './Components/currentdetail.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {}
          <Route path="/" element={< Login/>} />
          <Route path="/signup" element={< Signup/>} />
          <Route path="/dashboard" element={< Dashboard/>} />
          <Route path="/active" element={< Active/>} />
          <Route path="/completed" element={< Completed/>} />
          <Route path="/deleted" element={< RecentlyDeleted/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
