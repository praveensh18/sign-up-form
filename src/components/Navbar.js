import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-container">
            <div className="logo">
                <h1>My App</h1>
            </div>
            
            <nav>
            <Link to="/" className="nav-link">
              Home
            </Link>

            <Link to="/" className="nav-link">
              Contact us
            </Link>
            
          </nav>
            </div>
        </div>
    )
}

export default Navbar
