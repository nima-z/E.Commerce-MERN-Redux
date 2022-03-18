import ProductGrid from "../components/Products/ProductGrid";

import { products } from "../data";

function AllProducts() {
  return (
    <div>
      <ProductGrid products={products} />
    </div>
  );
}

export default AllProducts;
