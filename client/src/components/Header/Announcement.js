import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  position: sticky;
  top: 0;
  z-index: 100;
`;

function Announcement() {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
}

export default Announcement;
