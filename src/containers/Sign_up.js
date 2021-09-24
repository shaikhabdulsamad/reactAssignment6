import Header from "../components/Header";

function Signup(){
    return(
        <div>  <Header link1="Home" link2="SignIn" />
        <div className="container mt-5">
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="btn btn-primary mt-3">Submit</button>
      </div>
      </div>
    )
}
export default Signup;