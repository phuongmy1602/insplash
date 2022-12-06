import Advertise from "../pages/Advertise";
import Editorial from "../pages/Editorial";
import Explore from "../pages/Explore";
import InsplashPlus from "../pages/InsplashPlus";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Submit from "../pages/Submit";

import Architecture from "../themes/Architecture";
import Athletics from "../themes/Athletics";
import Event from "../themes/Events";
import Experimental from "../themes/Experimental"
import Fashion from "../themes/Fashion";
import Film from "../themes/Film";
import Food from "../themes/Food"
import Nature from "../themes/Nature";
import People from "../themes/People";
import Renders3D from "../themes/Renders3D";
import Street from "../themes/Street";

const publicRoutes = [
  { path: "/", component: Editorial },
  { path: "/advertise", component: Advertise },
  { path: "/explore", component: Explore },
  { path: "/plus", component: InsplashPlus },
  { path: "/login", component: Login },
  { path: "/signup", component: SignUp },
  { path: "/submit", component: Submit },
  { path: "/t/experimental", component: Experimental },
  { path: "/t/3d-renders", component: Renders3D },
  { path: "/t/architecture-interior", component: Architecture },
  { path: "/t/fashion-beauty", component: Fashion },
  { path: "/t/current-events", component: Event },
  { path: "/t/nature", component: Nature },
  { path: "/t/food-drink", component: Food },
  { path: "/t/film", component: Film },
  { path: "/t/people", component: People },
  { path: "/t/athletics", component: Athletics },
  { path: "/t/street-photography", component: Street },
];


export default publicRoutes;
