//Libraries
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

//Imports
import HomePage from "./pages/HomePage";
import AllProducts from "./pages/AllProducts";
import ProductDetail from "./pages/ProductDetail";
import Authentication from "./pages/Authentication";
import CartPage from "./pages/CartPage";
import WishList from "./pages/Wishlist";
import Success from "./pages/Success";
import useInitial from "./hooks/useInitial";
import "./App.css";

//------------------------------------------------------

// fetch and cache all products for Initial state
function App() {
  useInitial();

  // control user login state
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products">
        <Route index element={<AllProducts />} />
        <Route path=":category" element={<AllProducts />} />
      </Route>
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route
        path="/authentication"
        element={!user ? <Authentication /> : <HomePage />}
      ></Route>
      <Route path="/cart" element={<CartPage />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
