import {Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import {Toaster} from 'react-hot-toast'
import FoodDetails from "./Pages/FoodDetails";
import AddFood from "./Pages/AddFood";
import ErrorPage from "./Pages/ErrorPage";


const App = () => {
  return (
    <>
      <Toaster/>
      <Routes>
         
         <Route path='/' element={<Home/>}/>
         <Route path="/food/:id" element={<FoodDetails/>}/>
         <Route path="/add-food" element={<AddFood/>}/>

         {/* for error page  */}
         <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </>
  );
};

export default App;