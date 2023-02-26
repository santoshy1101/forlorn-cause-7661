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

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/products/mens" element={<MensProducts />} />
      <Route path="/products/womens" element={<WomensProducts />} />
      <Route path="/products/cart" element={<Bag />} />
      <Route path="/products/cart/checkout" element={<Checkout />} />
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
