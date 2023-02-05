import React from 'react'
import Testimonial from './Testimonial'
import "./Testimonials.css"
import Img1 from "../../assets/avatar1.jpg"
import Img2 from "../../assets/avatar2.jpg"
import Img3 from "../../assets/avatar3.jpg"
import Img4 from "../../assets/avatar4.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Testimonials = () => {
  const testimonialArr = [
    {
      img:Img1,
      name:"Kwame Despite",
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit fugit perferendis aliquid ratione libero, laboriosam quas vero delectus qui quidem nobis expedita tenetur? Illum, voluptate. Voluptatum voluptates praesentium ea in."
    },
    {
      img:Img2,
      name:"John Doe",
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit fugit perferendis aliquid ratione libero, laboriosam quas vero delectus qui quidem nobis expedita tenetur? Illum, voluptate. Voluptatum voluptates praesentium ea in."
    },
    {
      img:Img3,
      name:"Denis Alberto",
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit fugit perferendis aliquid ratione libero, laboriosam quas vero delectus qui quidem nobis expedita tenetur? Illum, voluptate. Voluptatum voluptates praesentium ea in."
    },
    {
      img:Img4,
      name:"Shawn Remids",
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit fugit perferendis aliquid ratione libero, laboriosam quas vero delectus qui quidem nobis expedita tenetur? Illum, voluptate. Voluptatum voluptates praesentium ea in."
    },
  ]
  return (
    <section id="Testimonials" className="container">
      <div className="title">
        <h5>Review From Clients</h5>
        <h3>Testimonials</h3>
      </div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper testimonials">
      
        {
          testimonialArr.map((e,i)=>{
            return <SwiperSlide key={i}> <Testimonial  data = {e}/></SwiperSlide>
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials