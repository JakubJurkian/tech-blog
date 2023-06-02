import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <header className="">
      <nav>
        <ul className="">
          <li>
            <NavLink to="/" className="">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/auth">Login/Register</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
