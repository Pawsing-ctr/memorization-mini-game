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
    if (isActive) {
      setTimeout(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    if (isOpenModal === true) {
      setIsActive(false);
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

// werqwerwqer
//wqerqwerqwre
