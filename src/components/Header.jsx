import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top ">
      <div className="container container-fluid">
        <a href="#" className="navbar-brand  "><i className="bi bi-film"></i> CineSeek</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon" type="button"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link ">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies/top" className="nav-link  ">Top-Rated</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies/popular" className="nav-link ">Popular</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies/upcoming" className="nav-link ">Upcoming</NavLink>
            </li>
          </ul>

          <form action="#" className="d-flex ms-auto" role="search">
            <input type="search" className="form-control" placeholder="Search" />
          </form>
        </div>
      </div>
    </nav>
  )
}

