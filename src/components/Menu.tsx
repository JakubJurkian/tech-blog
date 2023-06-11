import { NavLink } from 'react-router-dom';

const Menu = (props: { onClickedElement(arg: boolean): void }) => {
  
  function clickHandler() {
    props.onClickedElement(true);
  }

  return (
    <ul className="py-2 space-y-3 font-medium text-slate-700 md:flex md:space-y-0 md:space-x-2">
      <li>
        <NavLink to="/about-me" className="menu-el" onClick={clickHandler}>
          About me
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
