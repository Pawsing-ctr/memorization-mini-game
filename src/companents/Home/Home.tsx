import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePass } from "../../constants/routePass";
import "./Home.css";
import Button from "../Button/Button";

const Home: React.FC = () => {
  const [countCardParsInput, setCountCardParsInput] = useState("0");

  const navigate = useNavigate();

  const handleButton = () => {
    navigate(RoutePass.Game, { state: countCardParsInput });
  };

  return (
    <div className="button-start-block">
      <div className="all-function-home">
        <div className="text-and-input">
          <p>Напишите количество пар карт в игре</p>
          <input
            onChange={(e) => setCountCardParsInput(e.target.value)}
            value={countCardParsInput}
            className="card-count-input"
            type="number"
          />
        </div>
        <Button
          onClick={handleButton}
          content={"Начать игру"}
          className={"start-button"}
        />
      </div>
    </div>
  );
};

export default Home;
