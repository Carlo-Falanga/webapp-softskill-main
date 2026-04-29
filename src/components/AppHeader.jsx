import { Link, NavLink } from "react-router-dom";

export default function AppHeader() {
  return (
    <>
      <nav className="navbar ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand mb-0 h1 text-white">
            🛣️ BooRoad
          </Link>
          <ul className="nav justify-content-end">
            <Link to="/createtrip" className="nav-link text-white">
              <button className="btn custom_button">Add Trip</button>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}
