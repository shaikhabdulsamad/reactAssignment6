import { Link } from 'react-router-dom';
import { auth, signOut } from '../config/Firebase';
import { useHistory } from "react-router-dom";
function Profile(){
    let history = useHistory();
const signout = () =>{
    signOut(auth).then(() => {
        console.log("signout ho gya")
        history.push("/");
      }).catch((error) => {
        console.log("signout nhe hoa")
      });
}

return(
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
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
             
              <li className="nav-item">
                <a href="#" className="nav-link" onClick={signout}>Logout</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
)
}
export default Profile;