import React from "react";
import { Route, Routes } from "react-router-dom";
import { RoutePass } from "../../constants/routePass";
import Game from "../Game/Game";
import Home from "../Home/Home";

const Body: React.FC = () => {
  return (
    <div className="content">
      <Routes>
        <Route path={RoutePass.Home} element={<Home />} />
        <Route path={RoutePass.Game} element={<Game />} />
      </Routes>
    </div>
  );
};

export default Body;
