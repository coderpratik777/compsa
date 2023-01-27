import React from "react";
import Footer from './footer'
import './styles/main.css'

export default function Main()
{
    return(
        <>
        <div className="main">
            <div className="binaryrunning">
                hiii
            </div>
            ::after==$0
            <div className="navbar">
                <div className="center">
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT DEPARTMENT</li>
                        <li>TEAM</li>
                        <li>GALLERY</li>
                        <li>TECH CORNER</li>
                        <li>EVENT CALENDAR</li>
                    </ul>
                </div>
            </div>
            <div className="logo"></div>
            <div className="title">
                COMPUTER SCIENCE AND ENGINEERING 
                DEPARTMENT
            </div>
        </div>
        
        <div className="main2">
           <div className="blur_circle"></div>
           <div className="blur_circle blur_circle2"></div>
           <div className="container1">
             &gt;&gt; Some of the glimpse of the COMPSA department
           </div>
           <div className="container2">
            
           </div>
        </div>
        <div className="main3">
            <Footer/>
        </div>
        
        </>
    )
}