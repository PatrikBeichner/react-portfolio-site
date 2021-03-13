import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Home from './components/home'
import Test2 from './components/test2';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Navbar />
       <Home />
       {/* <Test2 /> */}
    </React.Fragment>
  );
}

export default App;
