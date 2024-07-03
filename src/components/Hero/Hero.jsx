import React from "react";
import './Hero.css';
import profile_img from '../../assets/img_2.jpeg'
import AnchorLink from "react-anchor-link-smooth-scroll";


const Hero = ()=>
{
    return(
        <div  id='home' className='hero'>
            <img src={profile_img} width="500px" height="150px" alt=""></img>
            <h1><span>I'm Hema Patil</span>,Frontend developer</h1>
             <p>I am interested Frontend developer</p>
             <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">My resume</div>
             </div>
        </div>
    )
}

export default Hero