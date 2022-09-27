import "./toggle.scss";

import React, { useContext } from 'react'
import { ThemeContext } from "../../context";

const Toggle = () => {
    const theme = useContext(ThemeContext)

    const handleClick = ()=>{
        theme.dispatch({type:"TOGGLE"})
    }
  return (
    <section data-scroll-section>
    <div className="t">
    <img src="assets/sun.png" alt="" className="t-icon" />
    <img src="assets/moon.png" alt="" className="t-icon" />
    <div className="t-button" onClick={handleClick} style = {{left: theme.state.darkMode ? 0  : 25}}></div>
      
    </div>
    </section>
  )
}

export default Toggle
