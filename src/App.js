import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Router, Routes, Route, NavLink } from "react-router-dom";
import HomeTemplate from './User/Layout/HomeTemplate';
import Home from './User/Views/Home';
import Login from './User/Views/Login';
import Register from './User/Views/Register';
import Exam from './User/Views/Exam';
import ChooseAnser from './User/Views/ChooseAnser';
function App() {
  return (
    <BrowserRouter>
    
      <Routes>

      <Route path='' element={<HomeTemplate></HomeTemplate>} >  

      <Route index element={<Home></Home>}></Route>
      <Route path='login' element={<Login></Login>}></Route>
      <Route path='register' element={<Register></Register>}></Route>
      <Route path='exam' element={<Exam></Exam>}></Route>
      <Route path='exam/id' element={<ChooseAnser></ChooseAnser>}></Route>


      </Route>


      </Routes>



    
    </BrowserRouter>
  );
}

export default App;
