import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={`${classes['nav-bg']} fixed top-0 w-full`}>
      <nav>
        <ul className="flex space-x-2 p-4">
          <li>
            <NavLink to="/" className="text-lg">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/auth" className="text-lg">
              Login/Register
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
