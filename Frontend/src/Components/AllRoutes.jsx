import { Routes, Route } from "react-router-dom";
import Bag from "../Pages/Bag";
import Checkout from "../Pages/Checkout";
import Men from "../Pages/LandingPage/Men";
import Women from "../Pages/LandingPage/Women";
import SingleProduct from "../Pages/SingleProduct";
import MensProducts from "../Pages/ProductPages/MensProducts";
import WomensProducts from "../Pages/ProductPages/WomensProducts";
import FullPage from "../Pages/AdminPage/FullPage";
import LoginAdmin from "../Pages/AdminPage/LoginAdmin";
import PrivateRoute from "../Pages/AdminPage/PrivateRoute";
import { Login } from "../Pages/Login/Login";
import { SignUp } from "../Pages/SignupPage/Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Men />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/products/mens" element={<MensProducts />} />
      <Route path="/products/womens" element={<WomensProducts />} />
      <Route path="/products/cart" element={<Bag />} />
      <Route path="/products/cart/checkout" element={<Checkout />} />
      <Route path="/user/login" element={<Login/>} />
      <Route path="/user/signup" element={<SignUp/>} />
      {/* :ID gives you changed value */}
      <Route path="/singleproduct/:id" element={<SingleProduct />} />
      <Route path="/edit/:id"></Route>
    <Route path="/admin-page" element={<PrivateRoute><FullPage/></PrivateRoute>}></Route>
    <Route path="/admin-login" element={<LoginAdmin/>}></Route>
      {/* When get wrong link/params */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};
export default AllRoutes;
