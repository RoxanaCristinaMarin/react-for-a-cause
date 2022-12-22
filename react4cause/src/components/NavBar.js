import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div className="navBar">
            <ul className='nav-items'>
                <li id="first-nav">
                    <Link 
                        activeClass="active" 
                        to="home" 
                        spy={true} 
                        smooth={true} 
                        duration={1000}>&#x25CB;
                    </Link>
                </li>
                <li>
                    <Link 
                        activeClass="active" 
                        to="about" 
                        spy={true} 
                        smooth={true} 
                        duration={1000}>&#x25CB;
                    </Link>
                </li>
                <li>
                    <Link 
                        activeClass="active" 
                        to="donate" 
                        spy={true} 
                        smooth={true} 
                        duration={1000}>&#x25CB;
                    </Link>
                </li>
                <li>
                    <Link 
                        activeClass="active" 
                        to="contact" 
                        spy={true} 
                        smooth={true} 
                        duration={1000}>&#x25CB;
                    </Link>
                </li>
            </ul>
        </div>
    );
};
export default Navbar;