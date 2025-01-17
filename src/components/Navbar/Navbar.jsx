import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/img.png'
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar=()=>{

  const [menu ,setMenu]=useState("home")
  return(
    <div className='navbar'>
      <img src={logo} width="100px" height="100px"alt=""></img>
        <ul className="nav-menu">
            <li><AnchorLink className='anchor-link' href='#home' ><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu=="home"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu=="about"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' href='#services'><p onClick={()=>setMenu("services")}>Service</p></AnchorLink>{menu=="services"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu=="work"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu=="contact"?<img src={underline} alt=''/>:<></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' href='#contact'>connect with me</AnchorLink></div>
    </div>
  )
}
export default Navbar
