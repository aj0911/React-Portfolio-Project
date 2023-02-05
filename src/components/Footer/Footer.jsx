import React from 'react'
import {AiFillFacebook} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {BsTwitter} from "react-icons/bs"
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <h1>AR Solutions</h1>
      <ul>
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Testimonials">Testimonials</a></li>
      </ul>
      <div className="contact-box">
          <a href="https://www.facebook.com/profile.php?id=100017405250551" target="_blank"><AiFillFacebook/></a>
          <a><AiFillInstagram/></a>
          <a href="https://twitter.com/jhaabhinav16" target="_blank"><BsTwitter/></a>
      </div>
      <p>&copy; AR SOLUTIONS. All Rights Reserved-2023</p>
    </footer>
  )
}

export default Footer