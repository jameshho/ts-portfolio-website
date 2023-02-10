import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import NavbarSide from './NavbarSide';
import BackToTop from './BackToTop';


const Navbar = () => {
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(false)
  return (


      <div className='navbar'>
        <BackToTop/>
        <p onClick={() => navigate('/')
        }>James Ho Web Dev</p>


        <div onClick={() => setToggle(prev => !prev)} className="hamburgermenu "><GiHamburgerMenu /></div>

        <NavbarSide toggle={toggle} setToggle={setToggle} />

        {/* <NavLink to="/">Home</NavLink> */}
        <NavLink to="/projects">Projects</NavLink>
        {/* <NavLink to="/products">Products</NavLink> */}
        <NavLink to="/about">About</NavLink>
        <NavLink to="/roadmap">Roadmap</NavLink>
        <NavLink to="/contact">Let's Connect!</NavLink>



      </div>




  )
}

export default Navbar