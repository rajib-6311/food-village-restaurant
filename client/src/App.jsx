import {Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import {Toaster} from 'react-hot-toast'
import FoodDetails from "./Pages/FoodDetails";
import AddFood from "./Pages/AddFood";
import ErrorPage from "./Pages/ErrorPage";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";


const App = () => {
  return (
    <>
      <Toaster/>
      <Navbar/>
      <Routes>
         
         <Route path='/' element={<Home/>}/>
         <Route path="/food/:id" element={<FoodDetails/>}/>
         <Route path="/add-food" element={<AddFood/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/register" element={<Register/>}/>

         {/* for error page  */}
         <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </>
  );
};

export default App;