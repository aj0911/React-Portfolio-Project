import React from 'react'
import {MdOutlineDone} from "react-icons/md"

const Service = ({data}) => {
    const tickArr = []
    for(let x=0;x<data.about;x++){
        tickArr.push("Lorem ipsum dolor sit amet consectetur.")
    }
  return (
    <div className="service">
        <div className="name">
            <h2>{data.title}</h2>
        </div>
        <div className="about">
            {
                tickArr.map((e,i)=>{
                    return( 
                    <div key={i} className="tick">
                        <MdOutlineDone/>
                        <p>{e}</p>
                    </div>
                )})   
            }
            
        </div>
    </div>
  )
}

export default Service