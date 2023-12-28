// Task.js
import React, { useState } from "react";
import "./Task.css";
import img7 from "../../img/7.jpg";
import img8 from "../../img/8.jpg";
import img9 from "../../img/9.jpg";
import img10 from "../../img/10.jpg";
import img11 from "../../img/11.jpg";

const Task = ({ task }) => {
  let imageSource;

  // Choose the appropriate image based on the task type
  switch (task.name) {
    case "Meditation":
      imageSource = img7;
      break;
    case "Yoga":
      imageSource = img8;
      break;
    case "Running":
      imageSource = img9;
      break;
    case "Reading":
      imageSource = img10;
      break;
    case "Writing":
      imageSource = img11;
      break;
    default:
      // If no specific image found, use a default image or handle accordingly
      imageSource = img7; // Change this to your default image
      break;
  }
  const [IsBtnClicked, setIsBtnClicked] = useState(false);
  const handleClick = () => {
    setIsBtnClicked(true);
    // You can customize the redirect URL based on the task
    switch (task.name) {
      case "Meditation":
        window.location.href = "./Meditationdetails";
        break;
      case "Yoga":
        window.location.href = "./Yogadetails";
        break;
      case "Running":
        window.location.href = "./Runningdetails";
        break;
      case "Reading":
        window.location.href = "./Readingdetails";
        break;
      // default:
      //   // Redirect to a default URL or handle accordingly
      //   window.location.href = "./default-details";
      //   break;
    }
  };
  return (
    <div className="task-card">
      <div className="task-image-container">
        <img src={imageSource} alt={task.name} className="task-image" />
      </div>
      <div className="task-details">
        <h3>{task.name}</h3>
        <p>{task.description}</p>
        {!IsBtnClicked && (
          <button className="btn2" onClick={handleClick}>
            Learn more
          </button>
        )}
        {IsBtnClicked && <p>Redirecting to...</p>}
      </div>
    </div>
  );
};

export default Task;
