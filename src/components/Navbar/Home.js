import React from "react";
import img3 from "../../img/3.jpg"
import "./Navbar.css"
import Hbutton from "./Hbutton";
import Fpage from "../Firstpage/Fpage"

const Home=()=>{
    return(
        <>
            <div className="home">
<img className="img3" src={img3}/>
<h1 className="imgpara">Free Your Attention</h1>
<p className="imgpara1">At Free Your Attention, we believe in a world where your time and focus are your most valuable assets.<br/>In a digital age filled with constant distractions, our mission is to empower you to reclaim control over your attention and live a more intentional, fulfilling life.</p>
            </div>
          <Hbutton/>
          <Fpage/>
        </>
    )
}
export default Home;