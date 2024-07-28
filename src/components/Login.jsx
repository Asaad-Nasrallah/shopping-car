import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center mt-2">
        <div className="py-2 px-2 border border-4" style={{ width: "30%" }}>
          <h1 className="text-center">Login</h1>
          <form className="fw-bold">
            <div className="form-group mb-2">
              <label htmlFor="userEmail">Email</label>
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                className="form-control mt-1"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="userPassword fw-bold">Password</label>
              <input
                type="password"
                name="userPassword"
                id="userPassword"
                className="form-control mt-1"
              />
            </div>
            <input
              type="submit"
              value="Login"
              className="btn btn-primary w-100 mt-2"
            />
          </form>
          <div className="mt-2 text-center">
            <Link to="/forget-password">Forget Password</Link>
          </div>
        </div>
        <div className="mt-2 text-center">
          Need a new account? <Link to="/signup">Signup</Link>
        </div>
      </div>
    </>
  );
}

export default Login;
