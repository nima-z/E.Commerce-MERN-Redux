import ProductGrid from "../components/Products/ProductGrid";
import FilterTab from "../components/FilterTab/FilterTab";

import { products } from "../data";

function AllProducts() {
  return (
    <div>
      <FilterTab />
      <ProductGrid products={products} />
    </div>
  );
}

export default AllProducts;
