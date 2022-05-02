import ProductGrid from "../components/Products/ProductGrid";
import FilterTab from "../components/FilterTab/FilterTab";

import { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";

function AllProducts() {
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { data, isLoading, isError, error, status } = useProducts();

  useEffect(() => {
    if (status === "success") {
      const products = data.products;
      let filteredItems;

      if (filter["color"] && !filter["size"]) {
        filteredItems = products.filter((item) =>
          item.tag.includes(filter["color"])
        );
        setFilteredProducts(filteredItems);
      } else if (filter["size"] && !filter["color"]) {
        filteredItems = products.filter((item) =>
          item.size.includes(filter["size"])
        );
        setFilteredProducts(filteredItems);
      } else if (filter["color"] && filter["size"]) {
        filteredItems = products.filter(
          (item) =>
            item.size.includes(filter["size"]) &&
            item.tag.includes(filter["color"])
        );
        setFilteredProducts(filteredItems);
      } else {
        setFilteredProducts(products);
      }
    }
  }, [setFilteredProducts, filter, status, data]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "desc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort, setFilteredProducts]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return (
      <p>
        An error has occured.
        <hr /> {error.message}
        <hr /> please refresh the page
      </p>
    );
  }
  return (
    <div>
      <FilterTab setFilter={setFilter} setSort={setSort} />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}

export default AllProducts;
