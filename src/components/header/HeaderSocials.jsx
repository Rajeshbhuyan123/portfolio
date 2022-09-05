import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
       <a href="https://www.linkedin.com/in/rajesh-kumar-bhuyan-6445a2195/" target="_blank"><BsLinkedin/></a>
       <a href="https://github.com/Rajeshbhuyan123" target="_blank"><FaGithub/></a>
       <a href="https://twitter.com/RajeshK874" target="_blank"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials
