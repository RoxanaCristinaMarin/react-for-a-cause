import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
return (
<div className="navBar">
    <ul>
        <li>
            <Link 
            activeClass="active" 
            to="Home" 
            spy={true} 
            smooth={true} 
            duration={500}>
            Home
            </Link>
        </li>
        <li>
            <Link 
            activeClass="active" 
            to="about" 
            spy={true} 
            smooth={true} 
            duration={500}>
            About
            </Link>
        </li>
        <li>
            <Link 
            activeClass="active" 
            to="donate" 
            spy={true} 
            smooth={true} 
            duration={500}>
            Donate
            </Link>
        </li>
        <li>
            <Link 
            activeClass="active" 
            to="contact" 
            spy={true} 
            smooth={true} 
            duration={500}>
            Contact
            </Link>
        </li>
    </ul>
</div>
);
};
export default Navbar;