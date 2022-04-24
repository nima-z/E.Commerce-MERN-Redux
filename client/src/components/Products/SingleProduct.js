import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../../responsive";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 2rem;
  ${mobile({ flexDirection: "column", padding: "1rem" })}
`;
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  width: 70%;
  height: 75vh;
  object-fit: cover;
  ${mobile({ height: "50vh", width: "100%" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  ${mobile({ padding: "0.5rem" })}
`;
const Title = styled.h2``;

const Desc = styled.p`
  margin: 2rem 0;
`;

const Price = styled.span`
  display: block;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const FilterContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  ${mobile({ padding: "0.5rem", width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 2rem;
  font-weight: 200;
  ${mobile({ fontSize: "1.2rem" })}
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-left: 0.5rem;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 1rem;
  padding: 0.5rem;
`;
const SizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  padding: 2rem;
  ${mobile({ padding: "1.5rem 1rem", width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 0.5rem;
  border: 1px solid teal;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5rem;
`;

const Button = styled.button`
  padding: 1rem;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  margin-left: 2rem;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

export default function SingleProduct({ item }) {
  return (
    <Container>
      <ImageContainer>
        <Image src={item.image} />
      </ImageContainer>
      <InfoContainer>
        <Title>{item.title}</Title>
        <Desc>{item.desc}</Desc>
        <Price>$ {item.price}</Price>
        <FilterContainer>
          <Filter>
            <FilterTitle>Color</FilterTitle>
            <FilterColor color="black" />
            <FilterColor color="blue" />
            <FilterColor color="red" />
          </Filter>
          <Filter>
            <FilterTitle>Size</FilterTitle>
            <FilterSize>
              <SizeOption>XS</SizeOption>
              <SizeOption>S</SizeOption>
              <SizeOption>M</SizeOption>
              <SizeOption>L</SizeOption>
              <SizeOption>XL</SizeOption>
            </FilterSize>
          </Filter>
        </FilterContainer>
        <AddContainer>
          <AmountContainer>
            <Add />
            <Amount>1</Amount>
            <Remove />
          </AmountContainer>
          <Button>Add to cart</Button>
        </AddContainer>
      </InfoContainer>
    </Container>
  );
}
