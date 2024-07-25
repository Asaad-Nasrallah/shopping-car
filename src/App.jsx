import { Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Store from "./components/Store";
import Error from "./components/Error";
import Navbar from "./components/shared/Navbar";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}> </Route>
    <Route path="/store" element={<Store/>}> </Route>
    <Route path="*" element={<Error/>}> </Route>
    </Routes>
    
    </>
    );
}

export default App;