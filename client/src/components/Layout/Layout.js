import React, { Fragment } from "react";

import Announcement from "../Header/Announcement";
import NavBar from "../Header/NavBar";
import Footer from "../Footer/Footer";

export default function Layout(props) {
  return (
    <Fragment>
      <Announcement />
      <NavBar />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}
