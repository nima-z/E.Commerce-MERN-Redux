import { Container, Wrapper, Left, Right, Logo } from "./styles";

import ProfileMenu from "./ProfileMenu";
import { MdOutlineShoppingCart, MdStarOutline } from "react-icons/md";
import Badge from "@mui/material/Badge";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBox from "./SearchBox";
import { useEffect, useState } from "react";
import LogoImage from "./images/logo.jpeg";

function NavBar() {
  const [username, setUsername] = useState("");
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishList);
  const currentUser = useSelector((state) => state.user.currentUser);

  const navigate = useNavigate();
  function navigation(e) {
    navigate("/");
  }

  useEffect(() => {
    if (currentUser) {
      const name =
        currentUser.user.firstname.charAt(0).toUpperCase() +
        currentUser.user.firstname.slice(1);
      const lastname =
        currentUser.user.lastname.charAt(0).toUpperCase() +
        currentUser.user.lastname.slice(1);

      setUsername(name + " " + lastname);
    } else {
      setUsername("");
    }
  }, [currentUser]);

  return (
    <Container id="boutique">
      <Wrapper>
        <Left>
          <Logo src={LogoImage} onClick={navigation} />
        </Left>
        <Right>
          <SearchBox />
          <Link to="/wishlist">
            <Badge badgeContent={wishlist.quantity} color="error">
              <MdStarOutline size="20px" />
            </Badge>
          </Link>
          <Link to="/cart">
            <Badge badgeContent={cart.quantity} color="primary">
              <MdOutlineShoppingCart size="20px" />
            </Badge>
          </Link>
          {currentUser ? (
            <ProfileMenu username={username} />
          ) : (
            <Link to="/authentication" style={{ textDecoration: "none" }}>
              Sign in
            </Link>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
}

export default NavBar;
