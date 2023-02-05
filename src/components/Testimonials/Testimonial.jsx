import React from 'react'


const Testimonial = ({data}) => {
  return (
    <div className="testimonial">
        <img src={data.img} alt="" />
        <h3>{data.name}</h3>
        <p>{data.desc}</p>
    </div>
  )
}

export default Testimonial