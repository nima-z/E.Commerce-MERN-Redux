import { useState } from "react";

import styled from "styled-components";
import { mobile } from "../../responsive";

import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

import { slideItems } from "../../data";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.indexSlider * -100}vw);
  transition: 1s;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;

  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: rgba(0, 0, 0, 0.8);
`;
const Description = styled.p`
  margin: 3rem 0;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;
  background-color: transparent;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.8);
  & a {
    text-decoration: none;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.position === "left" && "10px"};
  right: ${(props) => props.position === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
    background-color: #d8d8d8;
  }
  z-index: 2;
`;

function Slider() {
  const [indexSlider, setIndexSlider] = useState(0);

  function clickHandler(direction) {
    if (direction === "left") {
      setIndexSlider(indexSlider > 0 ? indexSlider - 1 : 2);
    } else {
      setIndexSlider(indexSlider < 2 ? indexSlider + 1 : 0);
    }
  }
  return (
    <Container>
      <Arrow position="left" onClick={() => clickHandler("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper indexSlider={indexSlider}>
        {slideItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>
                <Link to="/products">Buy Now</Link>
              </Button>
            </InfoContainer>
            <ImgContainer>
              <Image src={item.image} />
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow position="right" onClick={() => clickHandler("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
}

export default Slider;
