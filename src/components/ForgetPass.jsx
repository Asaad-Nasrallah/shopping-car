import { Link } from "react-router-dom";

function ForgetPass() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <div className="py-2 px-2 border border-4" style={{ width: "30%" }}>
          <h3 className="text-center mb-3">Reset Password</h3>
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
            <input
              type="submit"
              value="Reset Password"
              className="btn btn-primary w-100 mt-2"
            />
          </form>
          <div className="mt-2 text-center">
            <Link to="/login">Login</Link>
          </div>
        </div>
        <div className="mt-2 text-center">
          Need a new account? <Link to="/signup">Signup</Link>
        </div>
      </div>
    </>
  );
}

export default ForgetPass;
