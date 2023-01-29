import React from "react";
import Footer from './footer'
import './styles/main.css'
import Circle from './animatingcircle'
import img1 from '../images/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg'

export default function Main()
{
    return(
        <>
        <div className="main">
            <div className="binaryrunning">
                hiii
            </div>
            <div className="cirlceanimation">
                <Circle/>
            </div>
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
            <div className="title ">
                COMPUTER SCIENCE AND ENGINEERING 
                ASSOCIATION
            </div>
            <div className="tagline">
            &gt;&gt; “I think everybody in this country should learn how to program a computer because it teaches you how to think.”- Steve Jobs
            </div>
        </div>
        
        <div className="main2">
           <div className="blur_circle"></div>
           <div className="blur_circle blur_circle2"></div>
           <div className="container1">
             &gt;&gt; Some of the glimpse of the COMPSA department
           </div>
           <div className="container2">
            <div className="info">
                <div className="info-title">
                    What is COMPSA ?</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit pretium scelerisque molestie a, aptent fringilla tempus nullam inceptos duis ullamcorper facilisi suscipit nunc, diam placerat porttitor felis sem suspendisse bibendum est pulvinar mollis.Praesent rhoncus montes morbi eleifend semper maecenas eu phasellus bibendum, quam scelerisque natoque leo ipsum odio cras facilisis, aliquet ex risus pulvinar posuere hac in pretium.Inceptos sem dolor tellus ipsum risus id penatibus accumsan aliquet fermentum adipiscing eros class, tempor pretium proin elit natoque nisi facilisis dictum nibh feugiat est pellentesque.In ut viverra tristique nisi nostra diam feugiat sollicitudin facilisi semper penatibus duis est finibus nibh, cursus vulputate imperdiet parturient mollis justo auctor leo hac sit nulla sapien potenti.Tincidunt integer hendrerit augue ullamcorper leo convallis condimentum eu hac commodo neque dignissim vel a, aenean venenatis donec tristique vulputate facilisis phasellus sociosqu potenti finibus egestas non.Elit risus ullamcorper sollicitudin aliquet sagittis dictum adipiscing praesent vitae conubia ut lorem est, luctus convallis dapibus purus nisi per eleifend amet tempor aenean sapien.Penatibus porttitor fermentum imperdiet at gravida platea nunc posuere mus vitae enim massa pulvinar </p>                
            </div>
            
           </div>
        </div>
        <div className="main2">
           <div className="blur_circle"></div>
           <div className="blur_circle blur_circle2"></div>
           <div className="container2">
            <div className="info">
                <div className="info-title">
                    Glimpse of the COMPSA Activities</div>
                   <div className="galleryimages" >
                    <img src={img1}  alt="logo"/>
                    <img src={img1}  alt="logo"/>
                    <img src={img1}  alt="logo"/>
                    <img src={img1}  alt="logo"/>
                    <img src={img1}  alt="logo"/>
                    <img src={img1}  alt="logo"/>
                   </div>
            </div>
            
           </div>
        </div>
        <div className="main3">
            <Footer/>
        </div>
        
        </>
    )
}