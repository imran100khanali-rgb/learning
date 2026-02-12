import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="header">
      <div className="logo">Imran RGB</div>

      <nav>
        <ul className="nav-links">
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;