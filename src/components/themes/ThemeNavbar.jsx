import { NavLink } from "react-router-dom";
import { themes } from "../../data";

const ThemeNavbar = () => {
  return (
    <div className="nav">
      <nav className="themes">
        <NavLink to="/" className="editorial">
          Editorial
        </NavLink>
        <div className="slash"></div>
        {themes.map((theme) => {
          return (
            <div key={theme.id}>
              <NavLink to={`/t/${theme.id}`} className="themes">
                {theme.name}
              </NavLink>
            </div>
          );
        })}
      </nav>
    </div>
  );
};
export default ThemeNavbar;
