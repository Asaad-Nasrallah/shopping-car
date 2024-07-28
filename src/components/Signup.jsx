/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useEffect, useRef, useState } from "react";

function Signup() {
  const { signup } = useUserContext();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const fromRef = useRef([]);
  const navigate = useNavigate();
  useEffect(() => {
    fromRef.current[0].focus();
  }, []);
  const handelForm = async (e) => {
    e.preventDefault();
    if (fromRef.current[1] !== fromRef.current[2]) {
      setError("password must be identical");
    }
    try {
      setError("");
      await signup(fromRef.current[0].value, fromRef.current[1].value);
      setLoading(true);
      navigate("/");
    } catch (err) {
      return setError(err.message.slice(10));
    }
    setLoading(false);
  };
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center mt-2">
        <div className="py-2 px-2 border border-4" style={{ width: "30%" }}>
          <h1 className="text-center">Signup</h1>
          {error && <p className="alert alert-danger">{error}</p>}
          <form className="fw-bold" onSubmit={handelForm}>
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
            <div className="form-group mb-2">
              <label htmlFor="userConfPassword fw-bold">Confirm Password</label>
              <input
                type="password"
                name="userConfPassword"
                id="userConfPassword"
                className="form-control mt-1"
                ref={(e) => (fromRef.current[2] = e)}
              />
            </div>
            <input
              type="submit"
              value="Signup"
              className="btn btn-primary w-100 mt-2"
              disabled={loading}
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
