import React from "react";
import TaskList from "../Tasks/TaskList";
import img7 from "../../img/7.jpg"
import img8 from "../../img/8.jpg"
import img9 from "../../img/9.jpg"
import img10 from "../../img/10.jpg"
import img11 from "../../img/11.jpg"
const Activities = () => {
  const tasks = [
    {
      id: 1,
      name: "Meditation",
      description: "Practice mindfulness for 10 minutes.",
      image:{img7},


    },
    { id: 2, name: "Yoga",
     description: "Complete a 20-minute yoga session." ,
    image: {img8},
  },
  {
    id: 3,
    name: 'Running',
    description: 'Go for a 30-minute run outdoors. Enjoy the fresh air and boost your cardiovascular health.',
    image: {img9},
  },
  {
    id: 4,
    name: 'Reading',
    description:"'Read a book for 15 minutes. Choose a book you've been meaning to read and immerse yourself in its pages.'",
    image: {img10},
  },
  {
    id: 5,
    name: 'Writing',
    description: 'Engage in a writing session. Express your thoughts, jot down ideas, or start a journal entry.',
    image: {img11}, 
  },
  ];

  return (
    <div>
      <h1>Meditation Activities</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};
export default Activities;
