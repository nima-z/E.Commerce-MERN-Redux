import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import {
  Container,
  LeftSide,
  Center,
  RightSide,
  Logo,
  Desc,
  SocialContainer,
  SocialIcon,
  Title,
  List,
  ListItem,
  ContactItem,
  Payment,
} from "./styles";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Container>
      <LeftSide>
        <Logo>Boutique</Logo>
        <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam odit
          assumenda neque error quisquam consequatur ipsam iusto eaque quibusdam
          in. Consequatur facilis accusamus voluptates corporis, non molestiae
          esse nihil sit.
        </Desc>
        <SocialContainer>
          <SocialIcon bg="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon bg="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon bg="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </LeftSide>
      <Center>
        <Title>Links</Title>
        <List>
          <ListItem>
            <Link to="/#boutique">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/cart#boutique">Cart</Link>
          </ListItem>
          <ListItem>
            <Link to="/products">All Products</Link>
          </ListItem>
          <ListItem>
            <Link to="/wishlist#boutique">Wish List</Link>
          </ListItem>
          <ListItem>
            <Link to="/#category">Catergory</Link>
          </ListItem>
          <ListItem>About</ListItem>
        </List>
      </Center>
      <RightSide>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "0.5rem" }} /> 354 Dixon Street, Stockholm
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "0.5rem" }} /> +1 234 87 23
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "0.5rem" }} /> contact@boutique.com
        </ContactItem>
        <Payment src="https://oshansachinthafitness.files.wordpress.com/2017/12/paypal-osf-secure.png" />
      </RightSide>
    </Container>
  );
}
