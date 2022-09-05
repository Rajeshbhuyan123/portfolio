import React from 'react'
import './footer.css'
import {FiFacebook} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'></a>

      <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#skills">Skill</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/profile.php?id=100042445054008"><FiFacebook/></a>
        <a href="https://www.linkedin.com/in/rajesh-kumar-bhuyan-6445a2195/"><BsLinkedin/></a>
        <a href="https://twitter.com/RajeshK874"><AiFillTwitterCircle/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Rajesh.All right</small>
      </div>
    </footer>
  )
}

export default Footer
