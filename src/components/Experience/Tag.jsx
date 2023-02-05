import React from 'react'
import {BsPatchCheckFill} from "react-icons/bs"

const Tag = (props) => {
    const {name,level} = props.data;
  return (
    <div className="tag">
        <div className="icon">
            <BsPatchCheckFill/>
        </div>
        <div className="skill-name">
            <h3>{name}</h3>
            <h5>
                {
                    (
                        ()=>{
                            if(level ===1){
                                return "Basic"
                            }
                            else if(level ===2){
                                return "Intermediate"
                            }
                            else if(level ===3){
                                return "Experienced"
                            }
                        }
                    )()
                }
            </h5>
        </div>
    </div>
  )
}

export default Tag