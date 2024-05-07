import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Signup from './Components/signup.js';
import Login from './Components/login.js';
import Dashboard from './Components/dashboard.js';
import AddPopup from './Components/addpopup.js';
import DeletePopup from './Components/deletepopup.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {}
          <Route path="/" element={< Login/>} />
          <Route path="/signup" element={< Signup/>} />
          <Route path="/dashboard" element={< Dashboard/>} />
          <Route path="/addpopup" element={< AddPopup/>} />
          <Route path="/deletepopup" element={< DeletePopup/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
