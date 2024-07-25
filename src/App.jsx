import { Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Store from "./components/Store";
import Error from "./components/Error";
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}> </Route>
    <Route path="/store" element={<Store/>}> </Route>
    <Route path="*" element={<Error/>}> </Route>
    </Routes>
    
    </>
    );
}

export default App;