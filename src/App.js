import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Router, Routes, Route, NavLink } from "react-router-dom";
import HomeTemplate from './User/Layout/HomeTemplate';
import Home from './User/Views/Home';
function App() {
  return (
    <BrowserRouter>
    
      <Routes>

      <Route path='' element={<HomeTemplate></HomeTemplate>} >  

      <Route index element={<Home></Home>}>


      </Route>


      </Route>


      </Routes>



    
    </BrowserRouter>
  );
}

export default App;
