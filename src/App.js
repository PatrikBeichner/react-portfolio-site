import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Home from './components/home'
import Test from './components/test';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Navbar />
       {/* <Home /> */}
       <Test />
    </React.Fragment>
  );
}

export default App;
