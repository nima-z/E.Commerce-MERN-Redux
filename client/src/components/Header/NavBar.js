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

function NavBar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchBox>
            <Input />
            <MdSearch style={{ color: "grey", fontSize: "16" }} />
          </SearchBox>
        </Left>
        <Center>
          <Logo>Boutique</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Badge badgeContent={4} color="primary">
            <MdOutlineShoppingCart />
          </Badge>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default NavBar;
