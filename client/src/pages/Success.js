import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { userRequest } from "../helpers/requestMethods";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/CartRedux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Message = styled.p``;

const Button = styled.button``;

export default function Success() {
  const [orderId, setOrderId] = useState();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser.user);

  const { data, products } = location.state;

  useEffect(() => {
    async function orderRequest() {
      try {
        const res = await userRequest.post("/orders", {
          userId: user._id,
          userName: user.name + "" + user.lastname,
          products,
          amount: data.amount,
          address: data.billing_details,
          status: data.status,
        });
        setOrderId(res.data.order._id);
        console.log(res.data.order);
        if (res.data.order.status === "succeeded") {
          dispatch(clearCart());
        }
      } catch (err) {
        console.log(err);
      }
    }
    data && orderRequest();
  }, [data, products, user._id, user.name, user.lastname, dispatch]);

  return (
    <Container>
      <Message>
        {orderId
          ? `Order has been created successfully. Your order number is ${orderId}`
          : `Please wait. Your order is being prepared...`}
      </Message>
      {orderId && <Button>Go to HomePage</Button>}
    </Container>
  );
}
