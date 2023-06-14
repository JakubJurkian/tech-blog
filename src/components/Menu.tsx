import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../store';

const Menu = (props: { onClickedElement(arg: boolean): void }) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  function clickHandler() {
    props.onClickedElement(true);
  }

  const notLogged = (
    <>
      <li>
        <NavLink to="/about-me" className="menu-el" onClick={clickHandler}>
          About me
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" className="menu-el" onClick={clickHandler}>
          Register
        </NavLink>
      </li>
    </>
  );

  const logged = (
    <>
      <li>
        <NavLink to="/about-me" className="menu-el" onClick={clickHandler}>
          About me
        </NavLink>
      </li>
      <li>
        <NavLink to="/logout" className="menu-el" onClick={clickHandler}>
          Logout
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/create-new-post"
          className="menu-el"
          onClick={clickHandler}
        >
          Create a new post
        </NavLink>
      </li>
    </>
  );

  return (
    <ul className="py-2 space-y-3 font-medium text-slate-700 md:flex md:space-y-0 md:space-x-2">
      {isLoggedIn && logged}
      {!isLoggedIn && notLogged}
    </ul>
  );
};

export default Menu;
