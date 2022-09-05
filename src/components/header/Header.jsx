import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header_container">
          <h5>Hiii It's</h5>
          <h1>Rajesh</h1>
          <h5 className='text-light'>Web Developer</h5>
          <CTA/>
          <HeaderSocials/>

          <div className="me">
            <img src={ME} alt=""/>
          </div>

          <a href="#contact" className='scroll-down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header
