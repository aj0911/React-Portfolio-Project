import React, { useRef, useState } from 'react'
import "./Contact.css"
import Box from './Box'
import { TailSpin } from 'react-loader-spinner'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const boxArr = [
    {
      icon:1,
      name:"Email",
      desc:"abhiportfolio2004@gmail.com",
      href:"mailto:abhiportfolio2004@gmail.com"
    },
    {
      icon:2,
      name:"Messenger",
      desc:"arsolutions",
      href:"https://m.me"
    },
    {
      icon:3,
      name:"WhatsApp",
      desc:"123-4567-890",
      href:"https://api.whatsapp.com/send?phone=910000000000&text=Hello this is the starting message"
    },
  ]
  const form = useRef();
  const form_submit = (e)=>{
      setLoader(true);
      e.preventDefault();
      emailjs.sendForm('service_hi42lt1', 'template_j247w2l', form.current, 'Ty-J0McGAI1KVjkYd')
      .then((result) => {
        setLoader(false);
        if(result.text === "OK"){toast.success("Email Sent Successfully.")};
        }, (error) => {
          setLoader(false);
          toast.error(`Error!! ${error}`)
        });
      e.target.reset()
  }
  const [loader,setLoader] = useState(false);
  return (
    <section id="Contact" className="container">
      <ToastContainer/>
      <div className="title">
        <h5>Get in Touch</h5>
        <h3>Contact Me</h3>
      </div>
      <div className="main-body">
        <div className="left">
              {
                boxArr.map((e,i)=>{
                  return <Box key={i} data ={e}/>
                })
              }
        </div>
        <div className="right">
          {
            (!loader)?
            <form ref={form} onSubmit={form_submit}>
              <input type="text" placeholder="Your Full Name" name="user_name" id=""  required/>
              <input type="email" placeholder="Your Email" name="user_email" id="" required/>
              <textarea placeholder="Your Message" name="message" required></textarea>
              <input type="submit" value="Send Message" />
            </form>
            :
            <TailSpin/>
          }
          
        </div>
      </div>
    </section>
  )
}

export default Contact