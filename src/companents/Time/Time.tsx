import React from "react";
import "./Time.css";

interface ITimeProps {
  text: string;
  seconds: number;
}

const Timer: React.FC<ITimeProps> = ({ seconds, text }) => {
  return (
    <div className="text-timer-block">
      <p className="timer-text">
        {text} {seconds} секунд
      </p>
    </div>
  );
};

export default Timer;
