import React, { Fragment } from "react";

import Announcement from "../Header/Announcement";
import NavBar from "../Header/NavBar";
import Footer from "../Footer/Footer";
import { MobileLogo, Logo } from "../Header/styles";
import LogoImage from "../Header/images/logo.jpeg";
import { useNavigate } from "react-router-dom";

export default function Layout(props) {
  const navigate = useNavigate();
  function navigation(e) {
    navigate("/");
  }
  return (
    <Fragment>
      <NavBar />
      <MobileLogo>
        <Logo src={LogoImage} onClick={navigation} />
      </MobileLogo>
      <Announcement />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}
