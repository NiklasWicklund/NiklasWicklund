
// Header component
import React from 'react';
import './Footer.css';
import { FaLinkedin,FaGithub,FaEnvelope } from 'react-icons/fa';
function Footer() {

    return (
        <footer className="footer">
            <div>Niklas Wicklund</div>
            <div className="social-icons">
                <a href="https://github.com/NiklasWicklund"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/niklas-wicklund-018219205/"><FaLinkedin /></a>
                <a href="mailto:niklaswic@gmail.com"><FaEnvelope /></a>
            </div>
        </footer>
    );
}
export default Footer;
