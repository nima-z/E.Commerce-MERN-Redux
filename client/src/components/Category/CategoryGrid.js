import { categories } from "../../data";
import { Container } from "./styles";
import CatBox from "./CatBox";

function CategoryGrid() {
  return (
    <Container id="category">
      {categories.map((item) => (
        <CatBox key={item.id} item={item} />
      ))}
    </Container>
  );
}

export default CategoryGrid;
