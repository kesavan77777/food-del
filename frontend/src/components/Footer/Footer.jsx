import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p> hii this is the websote being  nasbjdyeidgbdm dmdbbdibhdbbdmd mdbwbdjbwdbmwdkwnldnlwlndknw,dn,wd dnwndknwkdhkbdknwdnkwndnhkdnwmade by me if a ny queries as k meeeee</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>about us</li>
                        <li>delivery</li>
                        <li>privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>get in touch
                    </h2>
                    <ul>
                        <li>9486453525</li>
                        <li>kesavan200314@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">this is our company copyright section</p>

        </div>
    )
}

export default Footer
