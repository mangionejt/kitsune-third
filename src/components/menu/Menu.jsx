import "./menu.scss"

import React from 'react'

const Menu = ({menuOpen, setMenuOpen}) => {
    return (
      <section data-scroll-section>
        <div className={"menu "+(menuOpen && "active")} >
          <ul>
            <li onClick={()=>setMenuOpen(false)}>
              <a href="#intro">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
              <a href="#works">Works</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        </section>
      );
    }

export default Menu
