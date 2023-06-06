import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import bgPhoto from '/bg-photo.webp';

const RootLayout = () => {
  return (
    <>
      <div className="relative">
        <img
          src={bgPhoto}
          alt="background photo"
          className="max-h-96 w-full blur-sm border-b-2 border-gray-600"
        />
        <MainNavigation />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
