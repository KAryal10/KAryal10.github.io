import React, { useLayoutEffect, useRef } from 'react';
import {gsap} from "gsap";
import './intro-styles.css'

export default function Intro() {
    const begin =  useRef();

    useLayoutEffect(() => {
        const start = gsap.context(() => {
            begin.current = gsap.timeline({defaults: { ease: "power1.in"}})
                                .to('.text', {
                                    y:"0%", duration:1, stagger:0.25
                                })
                                .to('.slider', {
                                    y:"-100%", duration: 1.5, delay:0.5
                                })
                                .to('.intro', {
                                    y:"-100%", duration: 1
                                }, "-=0.93")
                                .to('.display-name', {
                                    opacity:1, duration:1
                                })
                                .to('.nav-menu',  {
                                    opacity:1, duration:1
                                });
        
        });
    });


    // const start = gsap.timeline({defaults: { ease: "power1.in"}});
    //   start.to('.text', {y:"0%", duration:1, stagger:0.25});
    //   start.to('.slider', {y:"-100%", duration: 1.5, delay:0.5});
    //   start.to('.intro', {y:"-100%", duration: 1}, "-=0.93");
    //   start.to('.display-name', {opacity:1, duration:1});
    //   start.to('.nav-menu',  {opacity:1, duration:1});
    return ( 
        <div> 
            <div class="intro" ref={begin}>
                <div class="intro-text" >
                    <h1 class="hide">
                    <span class="text">H I !</span>
                    </h1>
                    <h1 class="hide">
                    <span class="text">T H I S&ensp;I S</span>
                    </h1>
                    <h1 class="hide">
                    <span class="text"  ref={begin}>K R I T A N&ensp;A R Y A L</span>
                    </h1>
                </div>
            </div>
            <div class="slider"  ref={begin}></div>
        </div>
    );
}