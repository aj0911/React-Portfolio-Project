import React from 'react'
import "./Home.css"
import Me from '../../assets/me.png'
import CTA from './CTA'
import CV from "../../assets/cv.pdf"
import {BsLinkedin} from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"
import {BsDribbble} from "react-icons/bs"

const Home = () => {
  const ctaArr = [
    {
      title:"Download CV",
      href:CV,
      download:true
    },
    {
      title:"Let's Talk",
      href:"#Contact",
      download:false
    }
  ]
  return (
    <section id="Home" className='container'>
      <div className="home">
        <div className="text-intro">
          <h5>Hello, I'm</h5>
          <h1>Abhinav Jha</h1>
          <h6>FullStack Software Engineer</h6>
        </div>
        <CTA ctaArr={ctaArr} />
        <div className="img-me">
          <img src={Me}alt="Abhinav Jha" />
        </div>
      </div>
      <div className="left-icons">
        <a href="https://www.linkedin.com/in/abhinav-jha-709bbb256/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/" target="_blank"><AiFillGithub/></a>
        <a href="https://dribbble.com/dribbble" target="_blank"><BsDribbble/></a>
        <a>|</a>
      </div>
      <div className="right">
        <a href='#About'>Scroll Down</a>
      </div>
    </section>
  )
}

export default Home