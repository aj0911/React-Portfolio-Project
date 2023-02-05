import React from 'react'
import Project from './Project'
import "./Portfolio.css"

const Portfolio = () => {
  const portfolioArr = [
    {
      img:1,
      title:"Crypto Currency Dashboard & Financial Visualization"
    },
    {
      img:2,
      title:"Charts Template & Infographics in Figma"
    },
    {
      img:3,
      title:"Figma Dashboard UI Kit for data design web apps"
    },
    {
      img:4,
      title:"Maintaing Task and Tracking Progress"
    },
    {
      img:5,
      title:"Charts Template & Infographics in Figma"
    },
    {
      img:6,
      title:"Charts Template & Infographics in Figma"
    }
  ]
  return (
    <section id="Portfolio" className='container'>
      <div className="title">
        <h5>My Recent Work</h5>
        <h3>Portfolio</h3>
      </div>
      <div className="projects">
        {
          portfolioArr.map((e,i)=>{
            return <Project key={i} data ={e}/>
          })
        }
      </div>
    </section>
  )
}

export default Portfolio