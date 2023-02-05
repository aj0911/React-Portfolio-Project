import React from 'react'
import "./Card.css"
import { FiUsers } from 'react-icons/fi';
import { AiFillProject } from 'react-icons/ai';
import { BiMedal } from 'react-icons/bi';

const Card = (props) => {
  return (
    <div className="card">
        <div className="icon">
            {(()=>{
                if(props.data.icon == 1){
                return  <FiUsers />
                }
                else if(props.data.icon ==2){
                    return <AiFillProject/>
                }
                else if(props.data.icon ==3){
                    return <BiMedal/>
                }
            })()}
        </div>
        <div className="text">
            <h3>{props.data.title}</h3>
            <p>{props.data.desc}</p>
        </div>
    </div>
  )
}

export default Card