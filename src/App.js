
import Bag from "./Pages/Bag"
import Men from "./Pages/LandingPage/Men";
import SingleProduct from "./Pages/SingleProduct";
import Checkout from "./Pages/Checkout";
import CheckoutComponent from "./Components/CheckoutComponent";
import Footer from "./Components/Footer/Footer";
import { Login } from "./Pages/Login/Login";
import { SignUp } from "./Pages/SignupPage/Signup";


      



import Navbar from "./Components/Navbar";
import AllRoutes from "./Components/AllRoutes";

function App() {
  return (
    <div >
      <Navbar />
      <AllRoutes />
      <Footer/>

    </div>
  );
}

export default App;