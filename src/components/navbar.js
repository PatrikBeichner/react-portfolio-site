import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className='navbar'>
                    <div className='logo'>
                        
                    </div>
                    <div className='navlinks'>
                        <ul className='nav'>
                            <li>contact</li>
                            <li>projects</li>
                            <li>about</li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Navbar;
