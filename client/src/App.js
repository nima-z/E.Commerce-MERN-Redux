import HomePage from "./pages/HomePage";
import AllProducts from "./pages/AllProducts";
import ProductDetail from "./pages/ProductDetail";
import Authentication from "./pages/Authentication";
import CartPage from "./pages/CartPage";
import Layout from "./components/Layout/Layout";

import "./App.css";

function App() {
  return (
    <Layout>
      {/* <HomePage /> */}
      {/* <AllProducts /> */}
      {/* <ProductDetail /> */}
      {/* <Authentication /> */}
      <CartPage />
    </Layout>
  );
}

export default App;
