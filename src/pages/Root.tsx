import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import BackgroundImg from '../components/BackgroundImg';

const RootLayout = () => {
  return (
    <>
      <div className="relative">
        <BackgroundImg />
        <MainNavigation />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
