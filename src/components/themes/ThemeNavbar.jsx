import { NavLink } from "react-router-dom";
import { themes } from "../../data";

const ThemeNavbar = () => {
  return (
    <div className="nav">
      <nav className="pages">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'link active' : 'pages')}>
          Editorial
        </NavLink>
        <div className="slash"></div>
        {themes.map((theme) => {
          return (
            <div key={theme.id}>
              <NavLink to={`/t/${theme.id}`} className={({ isActive }) => (isActive ? 'link active' : 'pages')}>
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
