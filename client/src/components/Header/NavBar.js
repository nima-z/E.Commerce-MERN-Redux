import {
  Container,
  Wrapper,
  Left,
  Center,
  Right,
  Language,
  SearchBox,
  Input,
  Logo,
  MenuItem,
} from "./styles";

import { MdSearch, MdOutlineShoppingCart } from "react-icons/md";
import Badge from "@mui/material/Badge";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  function navigation(e) {
    navigate("/");
  }
  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <Language>EN</Language> */}
          <SearchBox>
            <Input placeholder="Search" />
            <MdSearch style={{ color: "grey", fontSize: "16" }} />
          </SearchBox>
        </Left>
        <Center>
          <Logo onClick={navigation}>Boutique</Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link to="/authentication">Sign in</Link>
          </MenuItem>
          <Link to="/cart">
            <Badge badgeContent={cart.quantity} color="primary">
              <MdOutlineShoppingCart />
            </Badge>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default NavBar;
