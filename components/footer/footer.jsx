import React from 'react';
import './Footer-styles.css'

export default function Footer() {
    return (    
        <footer>
            <p> Kritan Aryal |  <a href="mailto:karyal@rockets.utoledo.edu">karyal@rockets.utoledo.edu</a></p>

            <ul class="socials">
                <li>
                    <a href="http://linkedin.com/in/kritan-aryal-45ab55234" target="_blank"><img src="images/icon-logo-linkedin.png" alt="My LinkedIn" /></a>
                </li>
                <li>
                    <a href="https://twitter.com/christinatruong" target="_blank"><img src="images/icon-logo-twitter.png" alt="My Twitter profile" /></a>
                </li>
            </ul>
        </footer>
    );
}