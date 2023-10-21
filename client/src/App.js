import {Routes,Route} from "react-router-dom"
import Home from "./Pages/Home";
import Post from "./Pages/Post";
import Navbar from "./Components/Navbar";
function App() {
  return (
   <>
   <Navbar></Navbar>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/post/:objectId" element={<Post/>}></Route>
   </Routes>
   </>
  );
}

export default App;
