import "./App.css";
import { useState } from "react";
import { getDate, getTime } from "./utils/getDateTime";

import { FaCalendarWeek, FaClock, FaCircle } from "react-icons/fa";

function App() {
  const [time, setTime] = useState(getTime());
  const [date, setDate] = useState(getDate());

  const updateTime = () => {
    setTime(getTime());
    setDate(getDate());
  };

  setInterval(() => {
    updateTime();
  }, 30000);

  return (
    <>
      <div className="container main">
        <div id="datetime">
          <h2>
            <FaClock className="icons"/>
            {time}
          </h2>
          <h2>
            <FaCalendarWeek className="icons"/>
            {date}
          </h2>
        </div>
        <div id="notice-main">
          <h1>Notice</h1>
          <div id="content">
            <p><FaCircle className="icons circle-icon" />Posted on October 18, 2021 at 01:05:38pm</p>
            <p id="notice">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum scelerisque malesuada lectus, at aliquet quam
              consectetur sit amet. Phasellus ut est in eros varius lobortis
              vitae eu ex. Nam malesuada sed orci vitae vulputate. Sed interdum
              eu tortor eget placerat. In hac habitasse platea dictumst.
              Pellentesque lacinia ullamcorper varius. Vestibulum lectus justo,
              imperdiet sit amet molestie vel, sagittis nec quam. Sed sapien ex,
              laoreet ut ullamcorper vestibulum, placerat a nisl. Morbi aliquam
              quam id justo lobortis tempor. 
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
