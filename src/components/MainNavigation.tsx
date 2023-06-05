import { useState } from 'react';
import Menu from './Menu.tsx';

import classes from './MainNavigation.module.css';

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  function isElementClicked(bool: boolean) {
    if (bool) {
      setShowMobileMenu(false);
    }
  }
  return (
    <header className={`${classes['nav-bg']} fixed top-0 w-full z-10`}>
      <nav className="shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
          <div className="flex-shrink-0 font-bold tracking-wider">
            <img src="./home-24.svg" alt="home" />
          </div>
          <div className="hidden md:block">
            <Menu onClickedElement={isElementClicked} />
          </div>
          <button
            type="button"
            className="md:hidden bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="md:hidden">
          {showMobileMenu && <Menu onClickedElement={isElementClicked} />}
        </div>
      </nav>
    </header>
  );
}

export default App;
