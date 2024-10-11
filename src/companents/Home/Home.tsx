import React from "react";
import { useNavigate } from "react-router-dom";
import { RoutePass } from "../../constants/routePass";
import "./Home.css";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate(RoutePass.Game);
  };

  return (
    <div className="button-start-block">
      <button className="start-button" onClick={handleButton}>
        Начать игру
      </button>
    </div>
  );
};

export default Home;
