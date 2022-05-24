
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DeshBoard from './Components/dashboard/DeshBoard';
import Home from './Components/Home/Home';
import Tools from './Components/Home/Tools';
import Login from './Components/Login/Login';
import RequareAuth from './Components/Login/RequareAuth';
import SignUp from './Components/Login/SignUp';

import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div className='' >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/all_products' element={<Tools></Tools>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/dashboard' element={<RequareAuth>
          <DeshBoard></DeshBoard>
        </RequareAuth>}></Route>
        <Route path='/register' element={<SignUp></SignUp>}></Route>
      </Routes>



    </div>
  );
}

export default App;
