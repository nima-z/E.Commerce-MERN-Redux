import {
  Add,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  Remove,
  SearchOffOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import {
  arrayWithSignal,
  requestWithSignal,
  userRequest,
} from "../../helpers/requestMethods";
import { Link, useNavigate } from "react-router-dom";
import { clearWishList, likeProduct } from "../../redux/WishListRedux";
import { addProduct, removeProduct } from "../../redux/CartRedux";

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
  padding: 1rem 2rem;
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
  margin-right: 2rem;
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

const Icons = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
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

export default function WishList() {
  const navigate = useNavigate();
  const wishlist = useSelector((state) => state.wishList.products);
  const user = useSelector((state) => state.user.currentUser);
  const [liked, setLiked] = useState(true);

  const dispatch = useDispatch();

  let controller = new AbortController();

  useEffect(() => {
    if (!liked) {
      const token = user ? user.user.accessToken : null;

      async function addToWishlist() {
        try {
          const res = await arrayWithSignal(
            controller,
            wishlist,
            `wishlist/${user.user._id}`,
            token
          );
          console.log(res.data);
        } catch (err) {
          console.log(err);
        }
      }
      addToWishlist();

      return () => {
        controller.abort();
      };
    }
  }, [liked]);

  function onClearWishList() {
    dispatch(clearWishList());
  }

  function likeHandler(product) {
    setLiked((prev) => !prev);
    dispatch(likeProduct({ ...product }));
  }

  function buyingHandler(product) {
    dispatch(
      addProduct({
        ...product,
        color: product.color,
        size: product.size[0],
        quantity: 1,
        totalPrice: product.price,
      })
    );
  }

  return (
    <Container>
      <Title>Your Wish List</Title>
      <Top>
        <TopButton>
          <Link to="/products">Continue Shopping</Link>
        </TopButton>
        <TopTexts>
          <TopText>
            <Link to="/cart">Go to Shopping Cart </Link>
          </TopText>
        </TopTexts>
        <TopButton type="filled" onClick={onClearWishList}>
          Clear Wishlist
        </TopButton>
      </Top>
      <Bottom>
        <Info>
          {wishlist &&
            wishlist.map((product) => (
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
                        <b>Size:</b> {product.size[0]}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <Icons>
                    <Icon
                      onClick={() => {
                        buyingHandler(product);
                      }}
                    >
                      <ShoppingCartOutlined />
                    </Icon>
                    <Icon
                      onClick={() => {
                        likeHandler(product);
                      }}
                    >
                      <FavoriteOutlined style={{ color: "red" }} />
                    </Icon>
                    <Icon>
                      <Link to={`/product/${product._id}#boutique`}>
                        <SearchOffOutlined />
                      </Link>
                    </Icon>
                  </Icons>
                </Product>
                <Hr />
              </Fragment>
            ))}
        </Info>
      </Bottom>
    </Container>
  );
}
