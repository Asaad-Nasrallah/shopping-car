/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useEffect, useRef, useState } from "react";

function Login() {
  const { login } = useUserContext();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const fromRef = useRef([]);
  const navigate = useNavigate();
  const handelLogin = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await login(fromRef.current[0].value, fromRef.current[1].value);
      setLoading(true);
        navigate("/");
    } catch (err) {
      return setError(err.message.slice(10));
    }
    setLoading(false);
  };
  useEffect(() => {
    fromRef.current[0].focus();
  }, []);
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center mt-2">
        <div className="py-2 px-2 border border-4" style={{ width: "30%" }}>
          <h1 className="text-center">Login</h1>
          {error && <p className="alert alert-danger">{error}</p>}
          <form className="fw-bold">
            <div className="form-group mb-2">
              <label htmlFor="userEmail">Email</label>
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                className="form-control mt-1"
                ref={(e) => (fromRef.current[0] = e)}
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="userPassword fw-bold">Password</label>
              <input
                type="password"
                name="userPassword"
                id="userPassword"
                className="form-control mt-1"
                ref={(e) => (fromRef.current[1] = e)}
              />
            </div>
            <input
              type="submit"
              value="Login"
              className="btn btn-primary w-100 mt-2"
              onClick={handelLogin}
              disabled={loading}
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
