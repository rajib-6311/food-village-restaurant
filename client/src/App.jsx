import {Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import {Toaster} from 'react-hot-toast'
import FoodDetails from "./Pages/FoodDetails";


const App = () => {
  return (
    <>
      <Toaster/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path="/food/:id" element={<FoodDetails/>}/>
      </Routes>
    </>
  );
};

export default App;