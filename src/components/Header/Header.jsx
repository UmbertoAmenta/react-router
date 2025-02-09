import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="container">
      <div>
        <h1>Le ricette di nonna</h1>
      </div>
      <nav>
        <NavLink to="/">Homepage</NavLink>
        <NavLink to="/about-us">Chi siamo</NavLink>
        <NavLink to="/recipe-book">Il Ricettario</NavLink>
      </nav>
    </header>
  );
}
