
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BlogSection from './Components/Blog/BlogSection';
import DeshBoard from './Components/dashboard/DeshBoard';
import MyOrders from './Components/dashboard/MyOrders';
import MyProfile from './Components/dashboard/MyProfile';
import Myreview from './Components/dashboard/Myreview';
import Payment from './Components/dashboard/Payment';
import UpdateProdile from './Components/dashboard/UpdateProdile';
import AllReview from './Components/Home/AllReview';
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
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/all_products' element={<Tools></Tools>}></Route>
        <Route path='/home/purchase/:id' element={
          <RequareAuth>
            <ProductDetail></ProductDetail>
          </RequareAuth>
        } ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/dashboard' element={<RequareAuth> <DeshBoard></DeshBoard> </RequareAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='my-order' element={<MyOrders></MyOrders>}></Route>
          <Route path='my-review' element={<Myreview></Myreview>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='myupdate-profile/:email' element={<UpdateProdile></UpdateProdile>}></Route>

        </Route>
        <Route path='/all-review' element={<AllReview></AllReview>} ></Route>

        <Route path='/register' element={<SignUp></SignUp>}></Route>
        <Route path='/blog' element={<BlogSection></BlogSection>}></Route>

      </Routes>



    </div >
  );
}

export default App;
