import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { userRequest } from "../helpers/requestMethods";
import { useSelector } from "react-redux";

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
  const user = useSelector((state) => state.user.currentUser.user);

  const { data, products } = location.state;

  console.log(location);

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
        setOrderId(res.data._id);
      } catch (err) {
        console.log(err);
      }
    }
    data && orderRequest();
  }, [data, products, user._id, user.name, user.lastname]);

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
