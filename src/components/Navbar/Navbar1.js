import React from "react";
import "../Nav.css";
import Nav from "../Nav.js"
import About from "./About.js"
import Contact from "./Contact.js"
import Home from "./Home.js"
import Feedback from "./Feedback.js"
import Activities from "./Activities.js";
import Meditationdetails from "../Tasks/Meditationdetails.js"
import Readingdetails from "../Tasks/Readingdetails.js"
import Runningdetails from "../Tasks/Runningdetails.js"
import Yogadetails from "../Tasks/Yogadetails.js"
import { BrowserRouter as Router, Route,Routes, BrowserRouter } from "react-router-dom";
const Navbar1 = () => {
  return (
    <>
    <BrowserRouter>
      <Nav />
    <Routes>

      <Route path="/" exact element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/activities" element={<Activities/>} />
      <Route path="/feedback" element={<Feedback/>} />
      <Route path="/meditationdetails" element={<Meditationdetails/>} />
      <Route path="/yogadetails" element={<Yogadetails/>} />
      <Route path="/runningdetails" element={<Runningdetails/>} />
      <Route path="/readingdetails" element={<Readingdetails/>} />
      </Routes>
      </BrowserRouter>
      </>
  );
};

export default Navbar1;