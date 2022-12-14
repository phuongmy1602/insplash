import React from "react";
import CreatePage from "./CreatePage";
import { Link } from "react-router-dom";

function createPages(page) {
  return <CreatePage key={page.id} name={page.name} link={page.link} />;
}

function Header() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="left">
          <div className="logo">
            <Link to = "/">
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAJ1BMVEUAAAD////V1dWWlpZ0dHTPz89qamrh4eGQkJDk5OTR0dGtra3Y2NgWv+ptAAABL0lEQVR4nO3cMQ7CQAxFwQCBQOD+56Wms2RHxjDvAKs/vbXLqaR1qW+tmbbUPENISJiIMBghIWEiwmCEhISJCIMREhImIgxGSEiYiDAYISFhIsJghISEiQiDERISJiIMRkhImIgwGCEhYSLCYISEhIkIgxESEiYiDPb7wtsBwlvNtCLhdq5vq5lWJPziCOdHOD/C+RHOj3B+hPMjnB/h/AjnRzg/wvkRzo9wfoTzI5wf4fz+QHip6P44YNrjXrKt6KrgeoDwWrStJkJCwv4ICQn7IyQk7I+QkLA/QkLC/ggJCfsjJCTsj5CQsD9CQsL+CAkJ+yMkJOyPkJCwP0JCwv4ICQn7IyQk7G8/QLh3oz56vsq/oH09u1GSJEmSJEmSJEmSJEmSJEmSJEmSJP1rbwwaXQZE0kwUAAAAAElFTkSuQmCC"
                alt="logo image"
                className="logo"
              />
            </Link>
          </div>
        </div>
        <div className="nav-search-form">
          <form>
            <input
              type="text"
              placeholder="Search free high-resolution photos"
            />
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;
export { createPages };
