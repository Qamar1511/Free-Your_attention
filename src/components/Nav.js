import React from "react";
import img2 from "../img/2.png";
import Navbar from "./Navbar";

const Nav = () => {
  return (
    <>
      <div>
        <nav className="nav">
          <img className="logo" src={img2} />
         <Navbar />
         
        </nav>
      </div>
    </>
  );
};
export default Nav;
