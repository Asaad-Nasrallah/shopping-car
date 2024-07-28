import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Store from "./components/Store";
import Error from "./components/Error";
import Navbar from "./components/shared/Navbar";
import ShoppingCartProvider from "./context/ShoppingCartContext.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import ForgetPass from "./components/ForgetPass.jsx";
function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path="/store" element={<Store />}>
            {" "}
          </Route>
          <Route path="/signup" element={<Signup />}>
            {" "}
          </Route>
          <Route path="/login" element={<Login />}>
            {" "}
          </Route>
          <Route path="/forget-password" element={<ForgetPass />}>
            {" "}
          </Route>
          <Route path="*" element={<Error />}>
            {" "}
          </Route>
        </Routes>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
