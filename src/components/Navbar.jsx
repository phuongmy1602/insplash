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
              <div key={page.id}>
                <NavLink to={`${page.id}`} className="pages">
                  {page.name}
                </NavLink>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
