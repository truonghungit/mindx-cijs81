import { useState } from "react";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <nav
      className={`navbar navbar-expand-lg bg-body-tertiary ${
        loggedInUser ? "has-user" : "no-user"
      }`}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {loggedInUser && loggedInUser === "admin@gmail.com" && (
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Dashboard
                </a>
              </li>
            )}
          </ul>
          <div className="d-flex align-items-center">
            {loggedInUser && <div>Welcome {loggedInUser}</div>}

            {loggedInUser ? (
              <button
                onClick={() => setLoggedInUser(null)}
                className="btn btn-secondary ms-2"
                type="button"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => setLoggedInUser("admin@gmail.com")}
                className="btn btn-secondary ms-2"
                type="button"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
