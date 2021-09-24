import Header from "../components/Header";

function Signin(){
    return(
<div>
    <Header link1="Home" link3="SignUp" />
        
        <div className="container mt-5">
             <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingInput" placeholder="Name" />
          <label htmlFor="floatingInput">Name</label>
        </div>
             <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingInput" placeholder="Phone" />
          <label htmlFor="floatingInput">Phone</label>
        </div>
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
export default Signin;