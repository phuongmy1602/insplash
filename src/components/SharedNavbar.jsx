import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCamera,
  faBars,
  faBell,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

function SharedNavbar() {
  let isLogged = false;
  return (
    <header className="sharednav">
      <nav className="navbar">
        <div>
          <NavLink to="/">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAJ1BMVEUAAAD////V1dWWlpZ0dHTPz89qamrh4eGQkJDk5OTR0dGtra3Y2NgWv+ptAAABL0lEQVR4nO3cMQ7CQAxFwQCBQOD+56Wms2RHxjDvAKs/vbXLqaR1qW+tmbbUPENISJiIMBghIWEiwmCEhISJCIMREhImIgxGSEiYiDAYISFhIsJghISEiQiDERISJiIMRkhImIgwGCEhYSLCYISEhIkIgxESEiYiDPb7wtsBwlvNtCLhdq5vq5lWJPziCOdHOD/C+RHOj3B+hPMjnB/h/AjnRzg/wvkRzo9wfoTzI5wf4fz+QHip6P44YNrjXrKt6KrgeoDwWrStJkJCwv4ICQn7IyQk7I+QkLA/QkLC/ggJCfsjJCTsj5CQsD9CQsL+CAkJ+yMkJOyPkJCwP0JCwv4ICQn7IyQk7G8/QLh3oz56vsq/oH09u1GSJEmSJEmSJEmSJEmSJEmSJEmSJP1rbwwaXQZE0kwUAAAAAElFTkSuQmCC"
              alt="logo image"
              className="logo"
            />
          </NavLink>
        </div>
        <div className="nav-search-form">
          <form>
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input
              type="text"
              placeholder="Search free high-resolution photos"
            />
            <button className="camera">
              <FontAwesomeIcon icon={faCamera} />
            </button>
          </form>
        </div>
        <ul className="pages">
          <li>
            <NavLink
              to="/explore"
              className={({ isActive }) => (isActive ? "link active" : "pages")}
            >
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/advertise"
              className={({ isActive }) => (isActive ? "link active" : "pages")}
            >
              Advertise
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/plus"
              className={({ isActive }) => (isActive ? "link active" : "pages")}
            >
              Insplash+
            </NavLink>
          </li>
        </ul>
        <div className={isLogged ? "logged" : "slash"}></div>
        <div className="pages">
          <NavLink
            to="/login"
            className={isLogged ? "logged" : "pages"}
          >
            Login
          </NavLink>
          <NavLink
            to="/join"
            className={isLogged ? "logged" : "pages"}
          >
            Sign up
          </NavLink>
        </div>
        <button className="subBtn">
          <NavLink
            to="/submit"
            className={({ isActive }) => (isActive ? "link active" : "pages")}
          >
            Submit a photo
          </NavLink>
        </button>
        <div className="space"></div>
        <button className={!isLogged ? "logged" : "baeBtn"}>
          <FontAwesomeIcon icon={faBell} />
        </button>
        <button className={!isLogged ? "logged" : "baeBtn"}>
          <FontAwesomeIcon icon={faCircleUser} />
        </button>
        <button className="barBtn">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
    </header>
  );
}

export default SharedNavbar;
