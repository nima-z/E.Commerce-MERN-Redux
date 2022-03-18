import styled from "styled-components";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Container = styled.div`
  width: 200px;
  height: 280px;
  position: relative;
  background-color: #f5fbfd;
  box-shadow: 2px 2px 5px 0 gray;
  border-radius: 5px;

  &:hover > .icons {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;

const Icons = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.3rem;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Price = styled.p`
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
`;

function ProductItem({ item }) {
  return (
    <Container>
      <Image src={item.image} />
      <Icons className="icons">
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Icons>
      <Info>
        <Price>Price: $ {item.price}</Price>
      </Info>
    </Container>
  );
}

export default ProductItem;
