// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Home from './pages/home'
// import Test2 from './components/test2';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      {/* <Navbar /> */}
        <Switch>
          <Route path='/' component={Home} />
          {/* <Route path='/blog' component={blog} */}
        </Switch>

       {/* <Home /> */}
       {/* <Test2 /> */}
       </Router>
    </>
  );
}

export default App;
