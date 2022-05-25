
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DeshBoard from './Components/dashboard/DeshBoard';
import MyOrders from './Components/dashboard/MyOrders';
import MyProfile from './Components/dashboard/MyProfile';
import Home from './Components/Home/Home';
import Tools from './Components/Home/Tools';
import Login from './Components/Login/Login';
import RequareAuth from './Components/Login/RequareAuth';
import SignUp from './Components/Login/SignUp';
import ProductDetail from './Components/productDetails/ProductDetail';

import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div className='' >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/all_products' element={<Tools></Tools>}></Route>
        <Route path='/home/all_products/:id' element={
          <RequareAuth>
            <ProductDetail></ProductDetail>
          </RequareAuth>
        } ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/dashboard' element={<RequareAuth>
          <DeshBoard></DeshBoard>
        </RequareAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='my-order' element={<MyOrders></MyOrders>}></Route>

        </Route>

        <Route path='/register' element={<SignUp></SignUp>}></Route>

      </Routes>



    </div>
  );
}

export default App;
