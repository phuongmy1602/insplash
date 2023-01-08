import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Editorial from "./pages/Editorial";
import Explore from "./pages/Explore";
import Advertise from "./pages/Advertise";
import InsplashPlus from "./pages/InsplashPlus";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Submit from "./pages/Submit";
import SharedLayout from "./components/SharedLayout";
import SingleTheme from "./components/themes/SingleTheme";

function App() {
  return (
    <BrowserRouter>
      <Routes className="nav">
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Editorial />} />
          <Route path="t/:themeId" element={<SingleTheme />} />
          <Route path="explore" element={<Explore />} />
          <Route path="advertise" element={<Advertise />} />
          <Route path="plus" element={<InsplashPlus />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="join" element={<SignUp />} />
        <Route path="submit" element={<Submit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
