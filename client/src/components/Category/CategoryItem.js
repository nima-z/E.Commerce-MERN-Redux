import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 2px 2px 6px 0px #6c757d;

  &:hover > .image {
    filter: contrast(100%);
  }

  cursor: pointer;
`;
const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  transition: 0.5s;
  filter: contrast(40%);
  ${mobile({ height: "40vh" })}
`;
const Info = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: white;
  font-size: 2.2rem;
`;

function CategoryItem(props) {
  const category = props.title.toLowerCase();

  return (
    <Link to={`/products/${category}`}>
      <Container>
        <Image src={props.image} alt={props.title} className="image" />
        <Info>
          <Title className="title">{props.title}</Title>
        </Info>
      </Container>
    </Link>
  );
}

export default CategoryItem;
