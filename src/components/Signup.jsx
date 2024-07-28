import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center mt-2">
        <div className="py-2 px-2 border border-4" style={{ width: "30%" }}>
          <h1 className="text-center">Signup</h1>
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
            <div className="form-group mb-2">
              <label htmlFor="userConfPassword fw-bold">Confirm Password</label>
              <input
                type="password"
                name="userConfPassword"
                id="userConfPassword"
                className="form-control mt-1"
              />
            </div>
            <input
              type="submit"
              value="Signup"
              className="btn btn-primary w-100 mt-2"
            />
          </form>
        </div>
        <div className="mt-2 text-center">
            Already have an account? <Link to="/login">Login</Link>
          </div>
      </div>
    </>
  );
}

export default Signup;
