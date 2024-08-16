import React from 'react'
import '../styles/Footer.sass'
import footerLogo from '../assets/logoFooter.png'

function Footer() {
  return (
    <div className='footer'>
      <img src={footerLogo} alt='LogoFooter' className='footerLogo' />
      <p className='copy'>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
