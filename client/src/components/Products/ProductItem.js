import styled from "styled-components";
import { Link } from "react-router-dom";

import { mobile } from "../../responsive";
import {
  FavoriteBorderOutlined,
  FavoriteOutlined,
  SearchOffOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { addProduct } from "../../redux/CartRedux";
import { likeProduct } from "../../redux/WishListRedux";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { arrayWithSignal } from "../../helpers/requestMethods";

//======================================================

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
  ${mobile({
    width: "150px",
    height: "220px",
    display: "flex",
    flexDirection: "column",
  })}
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
  text-decoration: none;
  ${mobile({ fontSize: "0.9rem", fontWeight: 300 })}

  text-decoration: none;
`;

//=======================================================

function ProductItem({ product, token }) {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishList.products);
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const isLiked = wishList.find((item) => item._id === product._id);
    if (isLiked) {
      setLiked(true);
      setCheckLiked(true);
    }
  }, [wishList, product._id]);

  const [checkLiked, setCheckLiked] = useState(liked);

  let controller = new AbortController();

  useEffect(() => {
    if (liked !== checkLiked && user) {
      setCheckLiked(liked);
      async function addToWishlist() {
        try {
          const res = await arrayWithSignal(
            controller,
            wishList,
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

  function buyingHandler() {
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

  function likeHandler() {
    setLiked((prev) => !prev);
    dispatch(likeProduct({ ...product }));
  }

  //=======================================

  return (
    <Container>
      <Image src={product.image} />

      <Icons className="icons">
        <Icon onClick={buyingHandler}>
          <ShoppingCartOutlined />
        </Icon>
        <Icon onClick={likeHandler}>
          {liked ? (
            <FavoriteOutlined style={{ color: "red" }} />
          ) : (
            <FavoriteBorderOutlined />
          )}
        </Icon>
        <Icon>
          <Link to={`/product/${product._id}#boutique`}>
            <SearchOffOutlined />
          </Link>
        </Icon>
      </Icons>
      <Info>
        <Price>Price: $ {product.price}</Price>
      </Info>
    </Container>
  );
}

export default ProductItem;
