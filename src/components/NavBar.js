import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand" href="#">
          <img
            src="https://icon-library.com/images/rick-and-morty-icon/rick-and-morty-icon-15.jpg"
            alt="logo"
            width="30"
            height="30"></img>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link ">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/characters" className="nav-link">
                Personajes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/episodes" className="nav-link actives">
                Episodios
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
