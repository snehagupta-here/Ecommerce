import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Orders from "./pages/Orders"
import Product from "./pages/Product"
import PlaceOrder from "./pages/PlaceOrder"
import Collection from "./pages/Collection"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import ShopState from "./context/ShopState"
import Footer from "./components/Footer"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export default function App() {
  return (
   <>
     <ShopState>
   <Router>
    <div className="w-[90%] sm:w-[84%] mx-auto ">             {/* px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] */}
      <ToastContainer />
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />}  />
      <Route path="/login" element={<Login />} />
       <Route path="/orders" element={<Orders />} />
       <Route path="/product/:productId" element={<Product />} />
       <Route path="/place-order" element={<PlaceOrder />} />
       <Route path="/collection" element={<Collection />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
   </Router>
     </ShopState>
   </>
  )
}