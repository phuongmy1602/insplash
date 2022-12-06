import React from "react";
import Article from "../components/Article";
import Category from "../components/Category";
import Content from "../components/Content";
import GetImages from "../components/GetImages";
import Search from "../components/Search";
import {theme, page} from "../page";



function createPage(cate) {
  return <Category key={cate.id} name={cate.name} link={cate.link} />;
}

function Editorial() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="left">
          <div className="logo">
            <a href="/">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAJ1BMVEUAAAD////V1dWWlpZ0dHTPz89qamrh4eGQkJDk5OTR0dGtra3Y2NgWv+ptAAABL0lEQVR4nO3cMQ7CQAxFwQCBQOD+56Wms2RHxjDvAKs/vbXLqaR1qW+tmbbUPENISJiIMBghIWEiwmCEhISJCIMREhImIgxGSEiYiDAYISFhIsJghISEiQiDERISJiIMRkhImIgwGCEhYSLCYISEhIkIgxESEiYiDPb7wtsBwlvNtCLhdq5vq5lWJPziCOdHOD/C+RHOj3B+hPMjnB/h/AjnRzg/wvkRzo9wfoTzI5wf4fz+QHip6P44YNrjXrKt6KrgeoDwWrStJkJCwv4ICQn7IyQk7I+QkLA/QkLC/ggJCfsjJCTsj5CQsD9CQsL+CAkJ+yMkJOyPkJCwP0JCwv4ICQn7IyQk7G8/QLh3oz56vsq/oH09u1GSJEmSJEmSJEmSJEmSJEmSJEmSJP1rbwwaXQZE0kwUAAAAAElFTkSuQmCC"
                alt="logo image"
                className="logo"
              />
            </a>
          </div>
        </div>
        <Search />
        <div className="pages">{page.map(createPage)}</div>
        <ul className="nav">
          <li>
            <a href="/submit">Submit a photo</a>
          </li>
        </ul>
      </nav>
      <div className="cate">{theme.map(createPage)}</div>
      <Content />
      <div>
        <GetImages />
      </div>
    </div>
  );
}

export default Editorial;
