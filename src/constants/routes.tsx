import { RouteObject } from "react-router-dom";
import Game from "../companents/Game/Game";
import Home from "../companents/Home/Home";
import { RoutePass } from "./routePass";

export const routes: RouteObject[] = [
  {
    path: RoutePass.Home,
    element: <Home />,
  },
  {
    path: RoutePass.Game,
    element: <Game />,
  },
];
