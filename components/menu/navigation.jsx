import { useState } from 'react';
import './navigation.css';
import { Link } from 'react-router-dom';

export default function Navigation() {

    const[btnState, setBtnState] = useState(false);

    function handleClick() {
        setBtnState(btnState => !btnState);
    }

    let toggleClass = btnState ? 'hange' : 'ontainer';
    
    
    return ( 
        <div class="nav-menu">
            
            <ul class="nav-links">
            { btnState && (
                <ul class="nav-links">
                <li><Link to ="/" class="nav-buttons" >HOME</Link></li>  
                <li><Link to ="/resume" class="nav-buttons" >RESUME</Link>  </li>
                {/* <li><a class="nav-buttons" id="" href="blogs.html" download> BLOG</a></li>
                <li><a class="nav-buttons" id="" href="contact.html" download> CONTACT</a></li>   */}
            </ul>
            )}
             <div class= {`c${toggleClass}`} onClick={handleClick}>
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
            </ul>
        </div>
    );
    }