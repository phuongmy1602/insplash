import { NavLink } from "react-router-dom";
import Header from "./Header";
import { pages } from "../data";

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <Header />
        <nav className="nav">
          {pages.map((page) => {
            return (
              <NavLink to={`${page.id}`} className="pages">
                {page.name}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
