import { Link, useLocation } from "react-router-dom";
import { LineStyle, PermIdentity, Storefront } from "@material-ui/icons";
//==============================================
import "./sidebar.css";
//==============================================

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li
                className={
                  location.pathname === "/"
                    ? "sidebarListItem active"
                    : "sidebarListItem"
                }
              >
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/users" className="link">
              <li
                className={
                  location.pathname === "/users"
                    ? "sidebarListItem active"
                    : "sidebarListItem"
                }
              >
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li
                className={
                  location.pathname === "/products"
                    ? "sidebarListItem active"
                    : "sidebarListItem"
                }
              >
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
