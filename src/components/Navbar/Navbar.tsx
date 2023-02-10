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
      <BackToTop />
      <p className='navbar-first' onClick={() => { navigate('/'); window.scrollTo(0, 0) }
      }>James Ho Web Dev</p>


      <div onClick={() => setToggle(prev => !prev)} className="hamburgermenu "><GiHamburgerMenu /></div>

      <NavbarSide toggle={toggle} setToggle={setToggle} />

      {/* <NavLink to="/">Home</NavLink> */}
      <NavLink to="/projects" onClick={() => window.scrollTo(0, 0)}>Projects</NavLink>
      {/* <NavLink to="/products">Products</NavLink> */}
      <NavLink to="/about" onClick={() => window.scrollTo(0, 0)}>About</NavLink>
      <NavLink to="/roadmap" onClick={() => window.scrollTo(0, 0)}>Roadmap</NavLink>
      <NavLink to="/contact" onClick={() => window.scrollTo(0, 0)}>Let's Connect!</NavLink>



    </div>




  )
}

export default Navbar