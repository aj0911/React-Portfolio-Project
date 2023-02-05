import React from 'react'
import Tag from './Tag'

const Skill = (props) => {
    const {title,skills} = props.data;
  return (
    <div className="skill">
        <div className="text">
            <h3>{title}</h3>
        </div>
        <div className="tags">
            <ul>
            {
                skills.map((e,i)=>{
                    return <li key={i}><Tag  data = {e}/></li>
                })
            }
            </ul>

        </div>
    </div>
  )
}

export default Skill