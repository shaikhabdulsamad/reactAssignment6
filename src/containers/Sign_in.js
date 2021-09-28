import Header from "../components/Header";
import { auth, signInWithEmailAndPassword, onAuthStateChanged } from '../config/Firebase'
import { useState } from 'react'
import { useHistory } from "react-router-dom";
  function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        history.push("/profile");
        console.log("yes")

      } else {
        console.log("no")
        // history.push("/signin");
      }
    });
    const logIn = () => {
      signInWithEmailAndPassword(auth, email, password)

        .then((res) => {
          console.log("agaya===>", res)
         
        })
        .catch((err) => {
          console.log("masla agaya==>", err.message)
        })
    }
    return (
      <div>
        <Header />
        <div className="container mt-5">
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="btn btn-primary mt-3" onClick={logIn}>Submit</button>
        </div>
      </div>
    )
  }

export default Signin;