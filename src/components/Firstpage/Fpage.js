import React from "react";
import "./Fpage.css"
import Card from "./Card";
import img4 from "../../img/4.jpg"
import img5 from "../../img/5.jpg"
import img6 from "../../img/6.jpg"

const Fpage =()=>{
return(
    <>
    <div className="fpage">
        <h1 className="heading2">Join with us and become happy<br/> customers by doing activities<br/> with us</h1>
        <h3 className="heading3">Getting started is easy!</h3>
    </div>
    <div className="card-container">
    <Card
        title="Digital Detox Reminder"
        image={img4}
        
      />

      <Card
        title="Screen-Free Zone Pledge"
        image={img5}
        
      />
      <Card
        title="Nature Escape"
        image={img6}
        
      />

    </div>
    </>
)
}
export default Fpage;