
import Bag from "./Pages/Bag"
import Men from "./Pages/LandingPage/Men";
import SingleProduct from "./Pages/SingleProduct";
import Checkout from "./Pages/Checkout";
import CheckoutComponent from "./Components/CheckoutComponent";
import Footer from "./Components/Footer/Footer";

import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div >

    <Navbar />
     <AllRoutes />
<Men/>
{/* <SingleProduct /> */}
{/* <Bag/> */}
{/* <Checkout/> */}

      <Footer/>

    </div>
  );
}

export default App;
