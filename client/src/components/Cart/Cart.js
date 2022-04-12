import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  padding: 1.5rem;
  ${mobile({ padding: "0.3rem" })}
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 300;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

const TopButton = styled.button`
  padding: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  color: ${(props) => props.type === "filled" && "white "};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  cursor: pointer;
  text-decoration: underline;
  margin: 0 1rem;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Amount = styled.div`
  font-size: 1.5rem;
  margin: 0.5rem;
  ${mobile({ margin: "1rem 1.5rem" })}
`;

const Price = styled.div`
  font-size: 2.5rem;
  font-weight: 200;
  ${mobile({ marginBottom: "1.5rem", fontSize: "2rem" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 2rem;
  height: 60vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 20px;
`;

const SummaryItem = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && 600};
  font-size: ${(props) => props.type === "total" && "1.5rem"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: black;
  color: white;
`;

export default function Cart() {
  return (
    <Container>
      <Title>Your Cart</Title>
      <Top>
        <TopButton>Continue Shopping</TopButton>
        <TopTexts>
          <TopText>Shopping cart (2)</TopText>
          <TopText>Your Wishlist (0)</TopText>
        </TopTexts>
        <TopButton type="filled">Checkout</TopButton>
      </Top>
      <Bottom>
        <Info>
          <Product>
            <ProductDetail>
              <Image src="https://img.ltwebstatic.com/images3_pi/2020/12/12/1607739151946560c21817f9262cd527e1e5a6404c_thumbnail_900x.webp" />
              <Details>
                <ProductName>
                  <b>Product:</b> something
                </ProductName>
                <ProductId>
                  <b>ID:</b> 123365478
                </ProductId>
                <ProductColor color="black" />
                <ProductSize>
                  <b>Size:</b> XL
                </ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <AmountContainer>
                <Add />
                <Amount>2</Amount>
                <Remove />
              </AmountContainer>
              <Price> $ 30</Price>
            </PriceDetail>
          </Product>
          <Hr />
          <Product>
            <ProductDetail>
              <Image src="https://img.ltwebstatic.com/images3_pi/2020/12/12/1607739151946560c21817f9262cd527e1e5a6404c_thumbnail_900x.webp" />
              <Details>
                <ProductName>
                  <b>Product:</b> something
                </ProductName>
                <ProductId>
                  <b>ID:</b> 123365478
                </ProductId>
                <ProductColor color="black" />
                <ProductSize>
                  <b>Size:</b> XL
                </ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <AmountContainer>
                <Add />
                <Amount>2</Amount>
                <Remove />
              </AmountContainer>
              <Price> $ 30</Price>
            </PriceDetail>
          </Product>
        </Info>
        <Summary>
          <SummaryTitle>Order Summary</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>$ 80</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Estimated Shipping</SummaryItemText>
            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Shipping Discount</SummaryItemText>
            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem type="total">
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>$ 80</SummaryItemPrice>
          </SummaryItem>
          <SummaryButton>Checkout Now</SummaryButton>
        </Summary>
      </Bottom>
    </Container>
  );
}
