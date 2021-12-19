import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'

function Header() {
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
        <div className="container">
          <a className="navbar-brand" href="#"><img src={Logo} alt="Logo" width={80} height={80}/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Request">Request</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/BranchManager">Branch Manager</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;