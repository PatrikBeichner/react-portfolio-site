import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import * as entypo from '@styled-icons/entypo'
import { Menu, Cross } from '@styled-icons/entypo';
// import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData';
import './navbar.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [visible, setVisible] = useState(true);

  const showSidebar = () => {
      setSidebar(!sidebar);
      setVisible(!visible);
  }
  const toggleVisible = () => setVisible(!visible);

  return (
    <>
      <div className='Blur' style={{backdropFilter: visible ? 'blur(5px)' : 'visible'}}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <Menu onClick={showSidebar} size="35" style={{ backgroundColor: 'rgb(32, 30, 35)', visibility: visible ? 'visible' : 'hidden'}}/>
            {/* <p onClick={showSidebar}>*</p> */}
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <Cross size="35" />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                    {item.icon}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
