import ProductGrid from "../components/Products/ProductGrid";
import FilterTab from "../components/FilterTab/FilterTab";

// import { products } from "../dataForDb";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function AllProducts() {
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

  // let filteredProducts;
  // if (category) {
  //   filteredProducts = products.filter((item) => item.tag.includes(category));
  // } else {
  //   filteredProducts = products;
  // }

  if (!products) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <FilterTab />
        <ProductGrid products={products} />
      </div>
    );
  }
}

export default AllProducts;
