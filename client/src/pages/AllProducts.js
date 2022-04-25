import ProductGrid from "../components/Products/ProductGrid";
import FilterTab from "../components/FilterTab/FilterTab";

// import { products } from "../dataForDb";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function AllProducts() {
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");
  const [products, setProducts] = useState();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/products?qcategory=${category}`
            : "http://localhost:5000/api/products"
        );
        const data = res.data.products;
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [category]);

  useEffect(() => {
    if (products) {
      if (filter["color"] && !filter["size"]) {
        const hhh = products.filter((item) =>
          item.tag.includes(filter["color"])
        );
        setFilteredProducts(hhh);
      } else if (filter["size"] && !filter["color"]) {
        setFilteredProducts(
          products.filter((item) => item.size.includes(filter["size"]))
        );
      } else if (filter["color"] && filter["size"]) {
        setFilteredProducts(
          products.filter(
            (item) =>
              item.size.includes(filter["size"]) &&
              item.tag.includes(filter["color"])
          )
        );
      } else {
        setFilteredProducts(products);
      }
    }
  }, [setFilteredProducts, filter, products]);
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

  if (!products) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <FilterTab setFilter={setFilter} setSort={setSort} />
        <ProductGrid products={filteredProducts} />
      </div>
    );
  }
}

export default AllProducts;
