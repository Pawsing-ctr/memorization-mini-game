import React from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { RoutePass } from "../../constants/routePass";
import Game from "../Game/Game";
import Home from "../Home/Home";
import { routes } from "../../constants/routes";

const router = createBrowserRouter(routes);

const Body: React.FC = () => {
  return (
    <div className="content">
      {/* <Routes>
        <Route path={RoutePass.Home} element={<Home />} />
        <Route path={RoutePass.Game} element={<Game />} />
      </Routes> */}
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
