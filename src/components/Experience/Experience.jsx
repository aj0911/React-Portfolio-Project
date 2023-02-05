import React from 'react'
import Skill from './Skill'
import "./Experience.css"

const Experience = () => {
  const expArr = [
    {
      title:"Frontend Development",
      skills:[
        {
          name:"HTML",
          level:3
        },
        {
          name:"CSS",
          level:2
        },
        {
          name:"JavaScript",
          level:3
        },
        {
          name:"Bootstrap",
          level:3
        },
        {
          name:"Tailwind",
          level:3
        },
        {
          name:"React",
          level:3
        }
      ]
    },
    {
      title:"Backend Development",
      skills:[
        {
          name:"Node JS",
          level:2
        },
        {
          name:"MongoDB",
          level:3
        },
        {
          name:"PHP",
          level:1
        },
        {
          name:"MySQL",
          level:2
        },
        {
          name:"Python",
          level:2
        },
        {
          name:".Net MVC",
          level:3
        }
      ]
    }
  ]

  return (
    <section id="Experience" className="container">
      <div className="title">
        <h5>What Skills I have</h5>
        <h3>My Experience</h3>
      </div>
      <div className="skills">
        {
          expArr.map((e,i)=>{
            return <Skill key={i} data = {e} />
          })
        }
      </div>
    </section>
  )
}

export default Experience