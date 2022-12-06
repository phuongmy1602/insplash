import { Outlet } from 'react-router-dom';
import StyledNavbar from './Navbar';

const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );
};
export default SharedLayout;
