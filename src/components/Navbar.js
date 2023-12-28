import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Nav.css"

const Navbar = () => {
  const [ShowMediaIcons, setShowMediaIcons]=useState(false);
  const Handleclick=()=>{
    setShowMediaIcons(!ShowMediaIcons)
    
  }
  return (
    <> 
        
    <div className={ShowMediaIcons? "mobile-menu navbar  ":"navbar"}>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/activities">Activities</Link>
        <Link className="link" to="/feedback">Feedback</Link>
        <Link className="link" to="/contact">Contact</Link>
        </div>
        <div className="link hamburger">
        <GiHamburgerMenu onClick={Handleclick}/>
        </div>


    </>
  );
};
export default Navbar;
