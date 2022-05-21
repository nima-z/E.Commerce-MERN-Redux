import {
  Container,
  Wrapper,
  Left,
  Center,
  Right,
  SearchBox,
  Input,
  Logo,
} from "./styles";

import ProfileMenu from "./ProfileMenu";
import { MdSearch, MdOutlineShoppingCart } from "react-icons/md";
import Badge from "@mui/material/Badge";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser.user);
  const navigate = useNavigate();
  function navigation(e) {
    navigate("/");
  }

  const firstLetter = user.name.charAt(0).toUpperCase();

  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchBox>
            <Input placeholder="Search" />
            <MdSearch style={{ color: "grey", fontSize: "16" }} />
          </SearchBox>
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
          {user && <ProfileMenu letter={firstLetter} />}
        </Right>
      </Wrapper>
    </Container>
  );
}

export default NavBar;
