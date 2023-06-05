import { NavLink } from 'react-router-dom';

const Menu = (props: { onClickedElement(arg: boolean): void }) => {
  function clickHandler() {
    props.onClickedElement(true);
  }

  return (
    <ul className=" px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700 md:flex">
      <li>
        <NavLink to="/" className="menu-el" onClick={clickHandler}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/auth" className="menu-el" onClick={clickHandler}>
          Login/Register
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
    </ul>
  );
};

export default Menu;
