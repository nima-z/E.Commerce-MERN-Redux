//libraries
import { Routes, Route } from "react-router-dom";

//modules
import HomePage from "./pages/HomePage";
import AllProducts from "./pages/AllProducts";
import ProductDetail from "./pages/ProductDetail";
import Authentication from "./pages/Authentication";
import CartPage from "./pages/CartPage";
// import {
//   useQuery,
//   useQueryClient,
//   useMutation,
//   QueryClient,
//   QueryClientProvider,
// } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
//------------------------------------------------------

function App() {
  // const queryClient = new QueryClient()
  const user = false;
  return (
    // <QueryClientProvider client={queryClient}>
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
    </Routes>
    //   <ReactQueryDevtools initialIsOpen={false} />
    // </QueryClientProvider>
  );
}

export default App;
