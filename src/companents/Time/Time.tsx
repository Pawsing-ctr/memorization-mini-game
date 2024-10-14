import React, { useState, useEffect } from "react";
import "./Time.css";
// import { ITimeProps } from "../../types/types";

interface ITimeProps {
  text: string;
  isOpenModal: boolean;
}

const Timer: React.FC<ITimeProps> = ({ text, isOpenModal }) => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(true);

  useEffect(() => {
    if (isOpenModal === true) {
      setIsActive(false);
    }
    if (isActive) {
      setTimeout(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
  }, [isActive, seconds, isOpenModal]);

  return (
    <div className="text-timer-block">
      <p className="timer-text">
        {text} {seconds} секунд
      </p>
    </div>
  );
};

export default Timer;
