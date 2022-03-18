import styled from "styled-components";

import { categories } from "../../data";

import CategoryItem from "./CategoryItem";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem;
`;

function CategoryGrid() {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem title={item.title} image={item.image} key={item.id} />
      ))}
    </Container>
  );
}

export default CategoryGrid;
