import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
function socialid() {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/akshar-dubey-802a88249/" target="_blank"><BsLinkedin/></a>
      <a href="https://www.instagram.com/" target="_blank"><BsInstagram/></a>
      <a href="https://github.com/Akshar22Dubey" target="_blank"><AiFillGithub/></a>
    </div>
  )
}

export default socialid
