import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Signup from './Component/signup.js';
import Login from './Component/login.js';
import Dashboard from './Component/dashboard.js';
import AddPopup from './Component/addpopup.js';
import DeletePopup from './Component/deletepopup.js';

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
