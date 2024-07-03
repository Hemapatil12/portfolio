import React from 'react';
import './Footer.css'
import footer_logo from '../../assets/logo.png';
import user from '../../assets/user.png'
const Footer =()=>{
    return(
        <div className='footer'>
            <div className='footer-top'>
                <div className='footer-top-left'>
                    <img src={footer_logo} height="50px" width="50px" alt=""/>
                    <p>I am frontend developer </p>
                </div>
                <div className='footer-top-right'>
                    <div className='footer-email-input'>
                        <img src={user} width="20px" height="20px" alt=""/>
                        <input type='email' placeholder='enter your email'/>

                    </div>
                    <div className='footer-subscriber'>
                        subscriber
                    </div>
                    </div>
                </div>
                <hr/>
                <div className='footer-bottom'>
                    <p className='footer-bottom-left'> 2024 Hema patil .All rights</p>
                    <div className='footer-bottom-right'>
                        <p>Terms of service</p>
                        <p>privacy policy</p>

                        <p>connect with me</p>
                    </div>
                </div>
            </div>

        
    )
}

export default Footer