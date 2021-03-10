import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Home from './components/home'
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Navbar />
       <Home />
    </React.Fragment>
  );
}

export default App;
