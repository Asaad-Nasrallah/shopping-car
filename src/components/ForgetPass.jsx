/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useEffect, useRef, useState } from "react";

function ForgetPass() {
  const { resetPassword } = useUserContext();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState();
  const emailRef = useRef();
  const handelForgetPass = async (e) => {
    e.preventDefault();
    try {
      setError("");
      console.log(emailRef.current.value);
      await resetPassword(emailRef.current.value);
      setLoading(true);
      setMsg("check your email to get new password");
    } catch (err) {
      return setError(err.message.slice(10));
    }
    setLoading(false);
  };
  useEffect(() => {
    emailRef.current.focus();
  }, []);
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <div className="py-2 px-2 border border-4" style={{ width: "30%" }}>
          <h3 className="text-center mb-3">Reset Password</h3>
          {error && <p className="alert alert-danger">{error}</p>}
          {msg && <p className="alert alert-success">{msg}</p>}
          <form className="fw-bold" onSubmit={handelForgetPass}>
            <div className="form-group mb-2">
              <label htmlFor="userEmail">Email</label>
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                className="form-control mt-1"
                ref={emailRef}
              />
            </div>
            <input
              type="submit"
              value="Reset Password"
              className="btn btn-primary w-100 mt-2"
              disabled={loading}
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
