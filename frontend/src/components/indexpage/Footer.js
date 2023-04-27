import React from 'react'
import styling from './Footer.module.css'
import fb from '../../icons/facebook.png';
import insta from '../../icons/instagram.png';
import pin from '../../icons/pinterest.png';
import mail from '../../icons/mail.png';
import phone from '../../icons/telephone.png';


export default function Footer() {
  return (
    <>
    <div className={styling.containeren}>
        
        <div className={styling.first}>
            <h1>More about our company</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div className={styling.second}>
            <h1>Keep connected</h1>
            <div className={styling.fb}>
            <img alt='fb' src={fb}></img>
            <p>Like us on Facebook</p>
            </div>
            <div className={styling.fb}>
            <img alt='fb' src={insta}></img>
            <p>Follow us on Instagram</p>
            </div>
            <div className={styling.fb}>
            <img alt='fb' src={pin}></img>
            <p>Follow us on Pinterest</p>
            </div>
        </div>

        <div className={styling.tredje}>
            <h1>Contact information</h1>
            <div className={styling.mail}>
            <img width="30px" alt='fb' src={mail}></img>
            <p>joc@jewelry.com</p>
            </div>
            <div className={styling.mail}>
            <img alt='fb' src={phone}></img>
            <p>+45 25 11 22 05</p>
            </div>
        </div>

    </div>

    <div className={styling.footer}>
      <p>Copyright 2023 - JOC</p>
    </div>
    </>
  )
}
