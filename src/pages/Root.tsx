import { Outlet } from 'react-router-dom';

import bgPhoto from '/bg-photo.webp';

import MainNavigation from "../components/MainNavigation";
const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <div>
        <img src={bgPhoto} alt="background-photo" className="max-h-96 w-full blur-sm" />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
