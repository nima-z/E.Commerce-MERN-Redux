import ProductGrid from "../components/Products/ProductGrid";
import FilterTab from "../components/FilterTab/FilterTab";

import { products } from "../dataForDb";
import { useParams } from "react-router-dom";

function AllProducts() {
  const { category } = useParams();

  let filteredProducts;
  if (category) {
    filteredProducts = products.filter((item) => item.tag.includes(category));
  } else {
    filteredProducts = products;
  }

  return (
    <div>
      <FilterTab />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}

export default AllProducts;
