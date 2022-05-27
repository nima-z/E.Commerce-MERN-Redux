import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Fragment } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import { userRequest } from "../../helpers/requestMethods";
import { Link, useNavigate } from "react-router-dom";
import { clearCart, addProduct, removeProduct } from "../../redux/CartRedux";

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
  & a {
    text-decoration: none;
  }
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
  border: 2px solid darkgray;
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
  cursor: pointer;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
`;

export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  const [max, setMax] = useState(false);
  const [min, setMin] = useState(true);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function onClearCart() {
    dispatch(clearCart());
  }

  function increaseItem(product) {
    setMin(false);
    let newQ;
    if (quantity === product.inStock) {
      newQ = quantity;
      setMax(true);
    } else {
      newQ = quantity + 1;
      dispatch(
        addProduct({ ...product, quantity: 1, totalPrice: +product.price })
      );
    }
    setQuantity(newQ);
  }
  function decreaseItem(product) {
    setMax(false);
    let newQ;
    if (quantity === 2) {
      setMin(true);
      newQ = quantity - 1;
    } else {
      newQ = quantity - 1;
    }
    setQuantity(newQ);
    dispatch(removeProduct({ ...product }));
  }
  // function onAddProduct() {
  //   dispatch(addProduct());
  // }

  // function onRemoveProduct() {
  //   dispatch(removeProduct());
  // }

  const STRIPE_KEY = process.env.REACT_APP_STRIPE;

  function onToken(token) {
    setStripeToken(token);
  }

  useEffect(() => {
    async function paymentRequest() {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        navigate("/success", {
          state: { products: cart.products, data: res.data },
        });
      } catch (err) {
        console.log(err);
      }
    }
    stripeToken && cart.total >= 1 && paymentRequest();
  }, [stripeToken, navigate, cart.total, cart.products]);

  return (
    <Container>
      <Title>Your Cart</Title>
      <Top>
        <TopButton>
          <Link to="/products">Continue Shopping</Link>
        </TopButton>
        <TopTexts>
          <TopText>
            <Link to="/cart">Shopping cart ({cart.quantity})</Link>
          </TopText>
          <TopText>
            <Link to="/wishlist">Your Wishlist</Link>
          </TopText>
        </TopTexts>
        <TopButton type="filled" onClick={onClearCart}>
          Clear Cart
        </TopButton>
      </Top>
      <Bottom>
        <Info>
          {cart &&
            cart.products.map((product) => (
              <Fragment key={`${product._id} ${product.color} ${product.size}`}>
                <Product>
                  <ProductDetail>
                    <Link to={`/product/${product._id}#boutique`}>
                      <Image src={product.image} />
                    </Link>
                    <Details>
                      <ProductName>
                        <b>Product:</b> {product.title}
                      </ProductName>
                      <ProductId>
                        <b>Price:</b> $ {product.price}
                      </ProductId>
                      <ProductColor color={product.color} />
                      <ProductSize>
                        <b>Size:</b> {product.size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <AmountContainer>
                      <IconButton
                        onClick={() => {
                          increaseItem(product);
                        }}
                      >
                        <Add />
                      </IconButton>

                      <Amount>{product.quantity}</Amount>
                      <IconButton
                        onClick={() => {
                          decreaseItem(product);
                        }}
                      >
                        <Remove />
                      </IconButton>
                    </AmountContainer>
                    <Price> $ {product.totalPrice}</Price>
                  </PriceDetail>
                </Product>
                <Hr />
              </Fragment>
            ))}
        </Info>
        <Summary>
          <SummaryTitle>Order Summary</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>{cart.total}</SummaryItemPrice>
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
            <SummaryItemPrice>{cart.total}</SummaryItemPrice>
          </SummaryItem>
          <StripeCheckout
            name="Boutique"
            image="https://media.istockphoto.com/vectors/fashion-boutique-and-store-logo-label-emblems-with-doodle-line-art-vector-id1034771616?k=20&m=1034771616&s=612x612&w=0&h=_d6sgEXXV1f-bGNwNu8zrDrr89o6OOknS8Nlu4Hz4MA="
            billingAddress
            shippingAddress
            description={`Total: $${cart.total}`}
            amount={cart.total * 100}
            token={onToken}
            stripeKey={STRIPE_KEY}
          >
            <SummaryButton>Checkout Now</SummaryButton>
          </StripeCheckout>
        </Summary>
      </Bottom>
    </Container>
  );
}
