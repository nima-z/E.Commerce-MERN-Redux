import { MobileFriendlyOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

export const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

export const Logo = styled.h1``;

export const Desc = styled.p`
  margin: 1.5rem 0;
`;
export const SocialContainer = styled.div`
  display: flex;
`;
export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`;

export const Center = styled.div`
  flex: 1;
  padding: 1.7rem;
  /* ${mobile({ display: "none" })} */
`;

export const Title = styled.h3`
  margin-bottom: 3.4rem;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 0.8rem;
  & a {
    text-decoration: none;
  }
`;
export const RightSide = styled.div`
  flex: 1;
  padding: 1.5rem;
  ${mobile({ backgroundColor: "#eee" })}
`;

export const ContactItem = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
`;

export const Payment = styled.img`
  width: 50%;
`;
