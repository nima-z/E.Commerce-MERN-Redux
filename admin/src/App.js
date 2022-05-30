import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Auth from "./pages/authentication/auth";
import { Fragment } from "react";
import { Redirect } from "react-router-dom";
// import useProducts from "./hooks/useProducts";

function App() {
  const admin =
    localStorage.getItem("persist:admin") &&
    JSON.parse(JSON.parse(localStorage.getItem("persist:admin")).admin)
      .currentUser
      ? JSON.parse(JSON.parse(localStorage.getItem("persist:admin")).admin)
          .currentUser.user.isAdmin
      : false;

  // useProducts();

  return (
    <Router>
      <Switch>
        <Route path="/auth">{!admin ? <Auth /> : <Redirect to="/" />}</Route>
        {admin ? (
          <Fragment>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newproduct">
                <NewProduct />
              </Route>
            </div>
          </Fragment>
        ) : (
          // <Auth />
          <Redirect to="/auth" />
        )}
      </Switch>
    </Router>
  );
}

export default App;
