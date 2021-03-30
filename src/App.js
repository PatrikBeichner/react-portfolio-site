// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Home from './pages/home'
import Projects from './pages/projects'
import Contact from './pages/contact'
import Blog from './pages/blog'
// import Test2 from './components/test2';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      {/* <Navbar /> */}
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/blog' component={blog} */}
          <Route  path='/projects' exact component={Projects} />
          <Route  path='/blog' exact component={Blog} />
          <Route  path='/contact' exact component={Contact} />
        </Switch>

       {/* <Home /> */}
       {/* <Test2 /> */}
       </Router>
    </>
  );
}

export default App;
