import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
//==============================================
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Auth from "./pages/authentication/auth";
import UserList from "./pages/userList/UserList";
import ProductList from "./pages/productList/ProductList";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import NewUser from "./pages/newUser/NewUser";
import NewProduct from "./pages/newProduct/NewProduct";
import "./App.css";
//==============================================

function App() {
  // const admin =
  //   localStorage.getItem("persist:admin") &&
  //   JSON.parse(JSON.parse(localStorage.getItem("persist:admin")).admin)
  //     .currentUser
  //     ? JSON.parse(JSON.parse(localStorage.getItem("persist:admin")).admin)
  //         .currentUser.user.isAdmin
  //     : false;

  const admin = useSelector((state) => state.admin.currentUser);

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
          <Redirect to="/auth" />
        )}
      </Switch>
    </Router>
  );
}

export default App;
