import {
  Container,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option,
  // FilterButton,
} from "./styles";

export default function FilterTab({ setFilter, setSort }) {
  function filterHandler(e) {
    const value = e.target.value;
    setFilter((prev) => {
      return { ...prev, [e.target.name]: value };
    });
  }

  function sortHandler(e) {
    setSort(e.target.value);
  }

  return (
    <Container>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select defaultValue={"Color"} name="color" onChange={filterHandler}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>green</Option>
            <Option>yellow</Option>
          </Select>
          <Select defaultValue={"Size"} name="size" onChange={filterHandler}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        {/* <FilterButton>Filter</FilterButton> */}
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={sortHandler}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
    </Container>
  );
}
