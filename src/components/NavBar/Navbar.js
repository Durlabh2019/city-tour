import React  from 'react';
import './Navbar.scss';
import logo from "../../logo.png";

export default function NavBar(){

return ( <nav className="navBar">
<img src={logo} alt='city tours logo'></img>
<ul className="nav-links">
<li>
    <a href="/" className="nav-link">home</a>
</li>
<li>
    <a href="/" className="nav-link">about</a>
</li>
<li>
    <a href="/" className="nav-link">tours </a>
</li>
</ul>
</nav>
);
}


