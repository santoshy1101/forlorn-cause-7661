
import Bag from "./Pages/Bag"
import Men from "./Pages/LandingPage/Men";
import SingleProduct from "./Pages/SingleProduct";
import Checkout from "./Pages/Checkout";
import CheckoutComponent from "./Components/CheckoutComponent";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar"
import AllRoutes from "./Components/AllRoutes";


function App() {
  return (
    <div className="body">
<Navbar/>
<AllRoutes/>

{/* <Men/> */}
{/* <SingleProduct /> */}
{/* <Bag/> */}
{/* <Checkout/> */}

      <Footer/>

    </div>
  );
}

export default App;