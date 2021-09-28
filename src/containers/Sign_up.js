import Header from "../components/Header";
import { useState } from 'react'
import { auth, createUserWithEmailAndPassword } from "../config/Firebase";


function Signup() {

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const register = () => {
    console.log(fullName, email, password)
   
    createUserWithEmailAndPassword(auth, email, password)
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
          <input type="text" className="form-control" name="name" onChange={(e)=>setFullName(e.target.value)} value={fullName} placeholder="Name" />
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" name="phone" onChange={(e)=>setPhone(e.target.value)} value={phone} placeholder="Phone" />
          <label htmlFor="floatingInput">Phone</label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" name="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="name@example.com" />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" name="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="btn btn-primary mt-3" onClick={register}>Submit</button>
      </div>
    </div>
  )
}
export default Signup;