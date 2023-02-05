import React from 'react'
import "./About.css"
import Me from "../../assets/me-about.jpg"
import Card from './Card'

const About = () => {
  const cardArr = [
    {
      icon:1,
      title:"Experience",
      desc:"3+ Years Working"
    },
    {
      icon:2,
      title:"Clients",
      desc:"300+ Worldwide"
    },
    {
      icon:3,
      title:"Projects",
      desc:"80+ Completed"
    }
  ]

  return (
    <section id="About">
      <div className="container">
        <div className="title">
          <h5>Get To Know</h5>
          <h3>About Me</h3>
        </div>
        <div className="about-body">
          <div className="left">
            <img src={Me} alt="Abhinav Jha" />
          </div>
          <div className="right">
            <div className="cards">
              {cardArr.map(
                (e,i)=>{
                  return <Card data = {e} key= {i}/>
                }
              )}
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus vitae sunt ratione laborum doloribus labore voluptate, velit ab mollitia officia, veritatis tenetur libero atque vel? Voluptates illum voluptatibus nam rem!</p>
            <a href="#Contact">Let's Talk</a>
          </div>
      </div>

      </div>
    </section>
  )
}

export default About