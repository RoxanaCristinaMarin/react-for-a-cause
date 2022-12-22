import React from 'react';
import { Link } from 'react-scroll';

const ScrollToTop = () => {
    return (
            <div id="scroll-to-top">
                <Link 
                    activeClass="active" 
                    to="img-1" 
                    spy={true} 
                    smooth={true} 
                    duration={800}>^
                </Link>
            </div>
        );
};
export default ScrollToTop;