import { Link } from 'react-router-dom';


function Header(props) {
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container">
          <a className="navbar-brand" href="#">ReactApp</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">{props.link1}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signin">{props.link2}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">{props.link3}</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;