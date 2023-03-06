import { useState } from "react";
import Light from "../Light/Light";
import "./TrafficLight.css";

export default function TrafficLight() {
  const [lightOn, setLightOn] = useState("green");

  const handleNext = () => {
    switch (lightOn) {
      case "red":
        setLightOn("green");
        break;
      case "green":
        setLightOn("yellow");
        break;
      case "yellow":
        setLightOn("red");
        break;
      default:
        setLightOn("green");
    }
  };

  return (
    <div>
      <div className="traffic-light">
        <Light color="red" on={lightOn === "red"} />
        <Light color="yellow" on={lightOn === "yellow"} />
        <Light color="green" on={lightOn === "green"} />
      </div>

      <button onClick={handleNext}>next</button>
    </div>
  );
}
