import React from 'react'
import '../styles/Footer.sass'
import logoFooter from '../assets/logoFooter.png'

function Footer() {
  return (
    <div className='footer'>
      <img src={logoFooter} alt='logoFooter' />
      <p>&copy; 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
