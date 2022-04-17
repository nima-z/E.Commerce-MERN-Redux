import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: ${(props) => props.display};
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  position: sticky;
  top: 0;
  z-index: 100;
`;

function Announcement() {
  const [show, setShow] = useState("flex");
  function closeAnnounce() {
    setShow("none");
  }
  return (
    <Container display={show} onClick={closeAnnounce}>
      Super Deal! Free Shipping on Orders Over $50
    </Container>
  );
}

export default Announcement;
