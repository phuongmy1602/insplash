import "./App.css";
import Search from "./components/Search";
import Category from "./components/Category";
import { categories, pages } from "./category";
import Content from "./components/Content";
import GetImages from "./components/GetImages";

function createCategory(cate) {
  return <Category key={cate.id} name={cate.name} link={cate.link} />;
}

function App() {
  return (
    <div className="App">
      <nav class="navbar">
        <div class="left">
          <div class="logo">
            <a href="index.html">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAJ1BMVEUAAAD////V1dWWlpZ0dHTPz89qamrh4eGQkJDk5OTR0dGtra3Y2NgWv+ptAAABL0lEQVR4nO3cMQ7CQAxFwQCBQOD+56Wms2RHxjDvAKs/vbXLqaR1qW+tmbbUPENISJiIMBghIWEiwmCEhISJCIMREhImIgxGSEiYiDAYISFhIsJghISEiQiDERISJiIMRkhImIgwGCEhYSLCYISEhIkIgxESEiYiDPb7wtsBwlvNtCLhdq5vq5lWJPziCOdHOD/C+RHOj3B+hPMjnB/h/AjnRzg/wvkRzo9wfoTzI5wf4fz+QHip6P44YNrjXrKt6KrgeoDwWrStJkJCwv4ICQn7IyQk7I+QkLA/QkLC/ggJCfsjJCTsj5CQsD9CQsL+CAkJ+yMkJOyPkJCwP0JCwv4ICQn7IyQk7G8/QLh3oz56vsq/oH09u1GSJEmSJEmSJEmSJEmSJEmSJEmSJP1rbwwaXQZE0kwUAAAAAElFTkSuQmCC"
                alt="logo image"
                class="logo"
              />
            </a>
          </div>
        </div>
        <Search />
        <div class="pages">{pages.map(createCategory)}</div>
        <ul class="nav">
          <li>
            <a href="#">Login / Sign up</a>
          </li>
          <li>
            <a href="#">Submit a photo</a>
          </li>
        </ul>
      </nav>
      <div class="cate">{categories.map(createCategory)}</div>
      <Content />
      <div>
      <GetImages />
      </div>
    </div>
  );
}

export default App;
