import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../../responsive";

import styled from "styled-components";
import { useState } from "react";
import { addProduct } from "../../redux/CartRedux";
import { useDispatch } from "react-redux";

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
  font-size: 1.5rem;
  font-weight: 200;
  ${mobile({ fontSize: "1.2rem" })}
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: ${(props) =>
    props.selected ? "2px solid teal" : "0.5px solid gray"};
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
  border-color: ${(props) => (props.empty ? "red" : "teal")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5rem;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
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
  const [quantity, setQuantity] = useState(1);
  const [max, setMax] = useState(false);
  const [min, setMin] = useState(true);
  const [color, setColor] = useState(item.color);
  const [size, setSize] = useState(item.size[0]);
  const dispatch = useDispatch();

  function increaseItem() {
    setMin(false);
    let newQ;
    if (quantity === item.inStock) {
      newQ = quantity;
      setMax(true);
    } else {
      newQ = quantity + 1;
    }
    setQuantity(newQ);
  }
  function decreaseItem() {
    setMax(false);
    let newQ;
    if (quantity === 2) {
      setMin(true);
      newQ = quantity - 1;
    } else {
      newQ = quantity - 1;
    }
    setQuantity(newQ);
  }
  function pickColor(c) {
    setColor(c);
  }

  function pickSize(e) {
    setSize(e.target.value);
  }

  function BuyHandler() {
    dispatch(
      addProduct({
        ...item,
        size,
        color,
        quantity,
        totalPrice: parseFloat((item.price * quantity).toFixed(2)),
      })
    );
  }

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
          {item.color && (
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {/* {item.color.map((c) => (
              <FilterColor color={c} />
            ))} */}
              <FilterColor
                color={item.color}
                selected={item.color === color}
                onClick={() => {
                  pickColor(item.color);
                }}
              />
            </Filter>
          )}
          {item.size && (
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={pickSize}>
                {item.size.map((s) => (
                  <SizeOption key={s}>{s}</SizeOption>
                ))}
              </FilterSize>
            </Filter>
          )}
        </FilterContainer>
        {max && <p>There is no more item in the stock</p>}
        <AddContainer>
          <AmountContainer>
            <IconButton onClick={increaseItem} disabled={max}>
              <Add />
            </IconButton>
            <Amount empty={max}>{quantity}</Amount>
            <IconButton onClick={decreaseItem} disabled={min}>
              <Remove />
            </IconButton>
          </AmountContainer>
          <Button onClick={BuyHandler}>Add to cart</Button>
        </AddContainer>
      </InfoContainer>
    </Container>
  );
}
