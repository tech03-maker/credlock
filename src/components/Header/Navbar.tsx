import { Fragment } from "react";
import "./Navbar.css";
import logo from "../../assets/credlock-logo.webp";
export const Navbar = () => {
  return (
    <Fragment>
      <div className="container">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <div className="navbar-brand">
              <img className="w-50" src={logo} alt="" />
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item m-auto">
                  <a className="nav-link active" aria-current="page" href="#">
                    About
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <button
                  className="nav-button btn-outline-success"
                  type="submit"
                >
                  Contact
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};
