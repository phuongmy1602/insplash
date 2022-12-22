import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCamera,
  faBars
} from "@fortawesome/free-solid-svg-icons";

export function Header() {
  return (
    <header className="App">
      <nav className="navbar">
        <div className="left">
          <div className="logo">
            <Link to="/">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAJ1BMVEUAAAD////V1dWWlpZ0dHTPz89qamrh4eGQkJDk5OTR0dGtra3Y2NgWv+ptAAABL0lEQVR4nO3cMQ7CQAxFwQCBQOD+56Wms2RHxjDvAKs/vbXLqaR1qW+tmbbUPENISJiIMBghIWEiwmCEhISJCIMREhImIgxGSEiYiDAYISFhIsJghISEiQiDERISJiIMRkhImIgwGCEhYSLCYISEhIkIgxESEiYiDPb7wtsBwlvNtCLhdq5vq5lWJPziCOdHOD/C+RHOj3B+hPMjnB/h/AjnRzg/wvkRzo9wfoTzI5wf4fz+QHip6P44YNrjXrKt6KrgeoDwWrStJkJCwv4ICQn7IyQk7I+QkLA/QkLC/ggJCfsjJCTsj5CQsD9CQsL+CAkJ+yMkJOyPkJCwP0JCwv4ICQn7IyQk7G8/QLh3oz56vsq/oH09u1GSJEmSJEmSJEmSJEmSJEmSJEmSJP1rbwwaXQZE0kwUAAAAAElFTkSuQmCC"
                alt="logo image"
                className="logo" />
            </Link>
          </div>
        </div>
        <div className="nav-search-form">
          <form>
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input
              type="text"
              placeholder="Search free high-resolution photos" />
            <button>
              <FontAwesomeIcon icon={faCamera} />
            </button>
          </form>
        </div>
        <ul className="pages">
          <li>
            <Link to="/explore" className="pages">
              Explore
            </Link>
          </li>
          <li>
            <Link to="/advertise" className="pages">
              Advertise
            </Link>
          </li>
          <li>
            <Link to="/plus" className="pages">
              Insplash+
            </Link>
          </li>
        </ul>
        <div className="slash"></div>
        <div className="pages">
          <Link to="/login" className="pages">
            Login
          </Link>
          /
          <Link to="/signup" className="pages">
            Sign up
          </Link>
        </div>
        <button className="subBtn">
          <Link to="/submit">Submit a photo</Link>
        </button>
        <div className="space"></div>
        <button className="barBtn">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
    </header>
  );
}
