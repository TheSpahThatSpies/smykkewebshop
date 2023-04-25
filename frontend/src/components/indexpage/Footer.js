import React from 'react'
import styling from './Footer.module.css'

export default function Footer() {
  return (
    <>
    <div className={styling.containeren}>
        
        <div className={styling.first}>
            <h1>More about our company</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div className={styling.second}>
            <h1>Keep Connected</h1>
            <p>Like us on Facebook</p>
            <p>Follow us on Instagram</p>
            <p>Follow us on Pinterest</p>
        </div>

        <div className={styling.tredje}>
            <h1>Contact Information</h1>
            <p>joc@jewelry.com</p>
            <p>+45 25 11 22 05</p>
        </div>

    </div>
    </>
  )
}
