import { NavLink } from "react-router-dom";
import { themes } from "../../data";

const ThemeNavbar = () => {
  return (
    <div className="nav">
      <nav className="nav">
        <NavLink to="/" className="pages">
          Editorial
        </NavLink>
        {themes.map((theme) => {
          return (
            <NavLink to={`/t/${theme.id}`} className="pages">
              {theme.name}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};
export default ThemeNavbar;
