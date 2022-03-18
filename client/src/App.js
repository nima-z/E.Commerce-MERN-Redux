import { Fragment } from "react";

import HomePage from "./pages/HomePage";
import AllProducts from "./pages/AllProducts";

import "./App.css";

function App() {
  return (
    <Fragment>
      <HomePage />
      <AllProducts />
    </Fragment>
  );
}

export default App;
