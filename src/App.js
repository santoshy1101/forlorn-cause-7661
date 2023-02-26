import Bag from "./Pages/Bag"
import Men from "./Pages/LandingPage/Men";
import SingleProduct from "./Pages/SingleProduct";
import Checkout from "./Pages/Checkout";
import CheckoutComponent from "./Components/CheckoutComponent";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Ads from "./Components/Ads";
import AllRoutes from "./Components/AllRoutes";

function App() {
  return (

    <div >
    <Ads/>
<Navbar/>

<AllRoutes/>
{/* <SingleProduct /> */}
{/* <Bag/> */}
{/* <Checkout/> */}

      <Footer/>

    </div>
  );
}

export default App;