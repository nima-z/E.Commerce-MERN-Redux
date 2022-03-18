import styled from "styled-components";

import ProductItem from "./ProductItem";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  padding: 2rem 3rem;
`;

function ProductGrid({ products }) {
  return (
    <Container>
      {products.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </Container>
  );
}

export default ProductGrid;
