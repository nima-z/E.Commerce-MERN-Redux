import { Container, Wrapper, Left, Center, Right, Logo } from "./styles";

import ProfileMenu from "./ProfileMenu";
import { MdSearch, MdOutlineShoppingCart } from "react-icons/md";
import Badge from "@mui/material/Badge";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBox from "./SearchBox";

function NavBar() {
  const cart = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  function navigation(e) {
    navigate("/");
  }

  let firstLetter;
  if (currentUser) {
    firstLetter = currentUser.user.name.charAt(0).toUpperCase();
  }

  return (
    <Container id="boutique">
      <Wrapper>
        <Left>
          <SearchBox />
        </Left>
        <Center>
          <Logo onClick={navigation}>Boutique</Logo>
        </Center>
        <Right>
          <Link to="/cart">
            <Badge badgeContent={cart.quantity} color="primary">
              <MdOutlineShoppingCart size="20px" />
            </Badge>
          </Link>
          {currentUser ? (
            <ProfileMenu letter={firstLetter} />
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
