import React from 'react'
import CTA from '../Home/CTA'
import Img1 from "../../assets/portfolio1.jpg"
import Img2 from "../../assets/portfolio2.jpg"
import Img3 from "../../assets/portfolio3.jpg"
import Img4 from "../../assets/portfolio4.jpg"
import Img5 from "../../assets/portfolio5.png"
import Img6 from "../../assets/portfolio6.jpg"


const Project = ({data}) => {
    const ctaArr = [
        {
          title:"Github",
          href:"https://github.com/",
          download:false
        },
        {
          title:"Live Demo",
          href:"https://dribbble.com/dribbble",
          download:false
        }
      ]
    let imgUrl = "";
      switch(data.img){
        case 1:imgUrl = Img1;
            break;
        case 2:imgUrl = Img2;
        break;
        case 3:imgUrl = Img3;
        break;
        case 4:imgUrl = Img4;
        break;
        case 5:imgUrl = Img5;
        break;
        case 6:imgUrl = Img6;
        break;
      }
  return (
    <div className="project">
        <img src={imgUrl} alt="" />
        <h3>{data.title}</h3>
        <CTA ctaArr = {ctaArr}/>
    </div>
  )
}

export default Project