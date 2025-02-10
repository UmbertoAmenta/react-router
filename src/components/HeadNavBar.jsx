import { NavLink } from "react-router-dom";

export default function HeadNavBar() {
  return (
    <nav>
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="/recipe-book">Il Ricettario</NavLink>
      <NavLink to="/about-us">Chi siamo</NavLink>
    </nav>
  );
}
