import React from 'react';
import './Footer-styles.css'
import image from './github-mark.png'
import imageLinkedin from './icon-logo-linkedin.png'

export default function Footer() {
    return (    
        <footer>
            <p> Kritan Aryal |  <a href="mailto:karyal@rockets.utoledo.edu">karyal@rockets.utoledo.edu</a></p>

            <ul class="socials">
                <li>
                    <a href="http://linkedin.com/in/kritan-aryal-45ab55234" target="_blank"><img src={imageLinkedin} alt="My LinkedIn Profile" /></a>
                </li>
                <li>
                    <a href="https://github.com/KAryal10" target="_blank"><img src={image} alt="My Github profile" /></a>
                </li>
            </ul>
        </footer>
    );
}