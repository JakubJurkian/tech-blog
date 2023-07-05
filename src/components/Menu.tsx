import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { RootState } from '../store/store';
import { authLogout } from '../store/authSlice';
import { updateEmail, updateName } from '../store/profileSlice';

const Menu = (props: { onClickedElement(arg: boolean): void }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const email = useSelector((state: RootState) => state.profile.email);

  function clickHandler() {
    props.onClickedElement(true);
  }

  function logoutHandler() {
    props.onClickedElement(true);
    dispatch(authLogout());
    dispatch(updateName(''));
    dispatch(updateEmail(''));
  }

  const notLogged = (
    <>
      <li>
        <NavLink to="/register" className="menu-el" onClick={clickHandler}>
          Sign Up
        </NavLink>
      </li>
    </>
  );

  const logged = (
    <>
      {email === 'test@test.com' && (
        <li>
          <NavLink
            to="/create-new-post"
            className="menu-el"
            onClick={clickHandler}
          >
            Create a new post
          </NavLink>
        </li>
      )}
      <li>
        <NavLink to="/my-profile" className="menu-el" onClick={clickHandler}>
          My profile
        </NavLink>
      </li>
      <li>
        <button className="menu-el w-full text-left" onClick={logoutHandler}>
          Logout
        </button>
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
