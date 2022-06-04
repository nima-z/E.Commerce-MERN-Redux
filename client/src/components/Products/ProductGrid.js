import styled from "styled-components";
import { mobile } from "../../responsive";

import ProductItem from "./ProductItem";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  padding: 2rem 3rem;
  ${mobile({ gridTemplateColumns: "repeat(2, 1fr)", padding: "1rem 2rem" })}
`;

function ProductGrid({ products, token }) {
  return (
    <Container>
      {products.map((product) => (
        <ProductItem key={product._id} product={product} token={token} />
      ))}
    </Container>
  );
}

export default ProductGrid;
