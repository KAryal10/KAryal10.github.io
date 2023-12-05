import React from 'react';
import './Home-styles.css';
import { Link } from 'react-router-dom';
import myPic from './IMG_6218.jpeg'

export default function Home() {
    return (    
        <div class="index">
            <div  class="content-wrapper"> 
                <div>
                <div class="content-bg">
                    <img src={myPic} alt="My headshot" />
                    <div class="content-inside">
                    <header>
                        <h1>Kritan Aryal</h1>
                       
                    </header>

                
                    <main class="home-content" >
                        <h3>About</h3>
                        <p>Kritan Aryal is a driven and dedicated student with a passion for computer science and engineering. His academic achievements and hands-on experience demonstrate his commitment to excellence, problem-solving abilities, and a wide range of technical skills. Kritan's personal projects and leadership roles exemplify his enthusiasm for continuous growth and community engagement. As a Russell J. Ebeid Scholar, he is poised to make a significant impact in the field of technology and engineering. Connect with Kritan on <a href="https://www.linkedin.com/in/kritan-aryal-45ab55234/" target="_blank">LinkedIn</a> to stay updated on his exciting journey!
                        </p> 
                    </main>
                    <Link to ="/resume" class="btn" >Learn more</Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

