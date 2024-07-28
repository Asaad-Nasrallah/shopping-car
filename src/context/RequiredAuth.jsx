/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useUserContext } from "./UserContext";
import { useEffect } from "react";

function RequiredAuthProvider({ children }) {
  const { currentUser } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  if (!currentUser) {
    // Optionally, return null or a loading spinner if navigating
    // to prevent rendering unauthorized content
    return null;
  }
  return children;
}

export default RequiredAuthProvider;
