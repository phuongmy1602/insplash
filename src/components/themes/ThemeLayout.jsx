import { Outlet } from 'react-router-dom';
import ThemeNavbar from './ThemeNavbar';

const ThemeLayout = () => {
  return (
    <>
      <ThemeNavbar />
      <Outlet />
    </>
  );
};
export default ThemeLayout;
