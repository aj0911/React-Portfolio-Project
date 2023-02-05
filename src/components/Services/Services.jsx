import React from 'react'
import Service from './Service'
import "./Services.css"

const Services = () => {
  const serviceArr = [
    {
      title:"UI/UX Design",
      about:5
    },
    {
      title:"Web Development",
      about:6
    },
    {
      title:"Content Creation",
      about:5
    }
  ]
  return (
    <section id="Services" className="container">
      <div className="title">
        <h5>What I Offer</h5>
        <h3>Services</h3>
      </div>
      <div className="services">
        {
          serviceArr.map((e,i)=>{
            return <Service key={i} data ={e}/>
          })
        }
      </div>
    </section>
  )
}

export default Services