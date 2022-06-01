import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
  const admin = useSelector((state) => state.admin.currentUser);

  return (
    <Router>
      <Switch>
        {admin ? (
          <Fragment>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home token={admin.user.accessToken} />
              </Route>
              <Route path="/users">
                <UserList token={admin.user.accessToken} />
              </Route>
              <Route path="/user/:userId">
                <User token={admin.user.accessToken} />
              </Route>
              <Route path="/newUser">
                <NewUser token={admin.user.accessToken} />
              </Route>
              <Route path="/products">
                <ProductList token={admin.user.accessToken} />
              </Route>
              <Route path="/product/:productId">
                <Product token={admin.user.accessToken} />
              </Route>
              <Route path="/newproduct">
                <NewProduct token={admin.user.accessToken} />
              </Route>
            </div>
          </Fragment>
        ) : (
          <Auth />
        )}
      </Switch>
    </Router>
  );
}

export default App;
