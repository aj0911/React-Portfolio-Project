import React, { useRef } from 'react'
import "./Nav.css"
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { GiProgression } from 'react-icons/gi';
import { RiServiceLine } from 'react-icons/ri';
import { AiFillProject } from 'react-icons/ai';

const Nav = () => {
  const list = useRef();
  const click = (e)=>{
    for(let node of list.current.childNodes){
      if(node.classList.contains('active')){
        node.classList.remove('active')
      }
    }
    const li = e.currentTarget;
    if(!li.classList.contains('active')){
      li.classList.add('active');
    }
  }
  return (
    <nav id='nav'>
      <ul ref={list}>
      <li onClick={click}><a href="#Home"><AiOutlineHome/></a></li>
        <li onClick={click}><a href="#About"><AiOutlineUser/></a></li>
        <li onClick={click}><a href="#Experience"><GiProgression/></a></li>
        <li onClick={click}><a href="#Services"><RiServiceLine/></a></li>
        <li onClick={click}><a href="#Portfolio"><AiFillProject/></a></li>
      </ul>
    </nav>
  )
}

export default Nav