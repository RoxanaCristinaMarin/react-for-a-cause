import React from "react";
import { ExternalLink } from 'react-external-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
 
function Footer(){
    return (
        <div id="footer">
            <ExternalLink href="https://www.instagram.com"><FontAwesomeIcon id="faInsta" className="icons" icon={ faInstagram }></FontAwesomeIcon></ExternalLink>
            <ExternalLink href="https://www.facebook.com"><FontAwesomeIcon id="faFace" className="icons" icon={ faFacebook }></FontAwesomeIcon></ExternalLink>
            <ExternalLink href="https://www.tweeter.com"><FontAwesomeIcon id="faTweet" className="icons" icon={ faTwitter }></FontAwesomeIcon></ExternalLink>
            <ExternalLink href="https://www.youtube.com"><FontAwesomeIcon id="faYoutube" className="icons" icon={ faYoutube }></FontAwesomeIcon></ExternalLink>
        </div>
    );
}
 
export default Footer;