import React, { useState, useRef, useEffect, useCallback } from "react";
import useFetch from "./hooks/useFetch";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
      <Router>
      <div>
      <Routes>
          <Route exact path="/" element={<Login/>}/>            
          <Route exact path="/Home" element={<Home/>}/>                     
        </Routes>
      </div>
    </Router>
  )
}

export default App;