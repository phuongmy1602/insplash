import { Outlet } from 'react-router-dom';
import SharedNavbar from './SharedNavbar';
const SharedLayout = () => {
  return (
    <>
      <SharedNavbar />
      <Outlet />
    </>
  );
};
export default SharedLayout;
