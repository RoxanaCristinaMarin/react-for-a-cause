import React from "react";
import { Link } from 'react-scroll';
 
function Header(){
    return (
        <div id="header">
            <div id='logo'>100 |<p id="logo-description">Black Men of Long Island</p></div>
            <Link 
                activeClass="active" 
                to="donate" 
                spy={true} 
                smooth={true} 
                duration={1000}><button id='cta-header'>Donate</button>
            </Link>
        </div>
    );
}
 
export default Header;