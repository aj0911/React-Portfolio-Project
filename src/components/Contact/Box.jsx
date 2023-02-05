import React from 'react'
import {SiGmail}  from "react-icons/si"
import {RiMessengerLine}  from "react-icons/ri"
import {ImWhatsapp}  from "react-icons/im"

const Box = ({data}) => {
  return (
   <div className="box">
        {(()=>{
            if(data.icon===1){
                return <SiGmail/>
            }
            else if(data.icon===2){
                return <RiMessengerLine/>
            }
            else if(data.icon===3){
                return <ImWhatsapp/>
            }
        })()}
        <h3>{data.name}</h3>
        <p>{data.desc}</p>
        <a href={data.href} target="_blank">Send a message</a>
   </div>
  )
}

export default Box