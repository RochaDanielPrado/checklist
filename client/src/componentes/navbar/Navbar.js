import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="menu">
            <ul>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/checklist">Checklist</Link>
              </li>
            </ul>
          </nav>
    )
}

export default Navbar;

