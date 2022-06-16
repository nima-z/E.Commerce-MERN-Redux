//Libraries
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
//Imports
import ProductGrid from "../components/Products/ProductGrid";
import FilterTab from "../components/FilterTab/FilterTab";
import useProducts from "../hooks/useProducts";
import { requestWithSignal } from "../helpers/requestMethods";
import { useSelector } from "react-redux";
//------------------------------------------------

function AllProducts() {
  const { category } = useParams();
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { data, isLoading, isError, error, status } = useProducts(category);

  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const [newCart, setNewCart] = useState(cart);

  //create a controller to be able to cancel requests
  let controller = new AbortController();
  const token = user ? user.user.accessToken : null;

  //manage sending or canceling requests if redux cart is not equal to local state cart
  useEffect(() => {
    if (cart.total !== newCart.total) {
      setNewCart(cart);
      async function syncCart() {
        try {
          const res = await requestWithSignal(
            controller,
            cart,
            `cart/${user.user._id}`
          );
          console.log(res.data);
        } catch (err) {
          console.log(err);
        }
      }
      syncCart();

      return () => {
        controller.abort();
      };
    }
  }, [cart]);

  //filter products based on size or color
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

  // Sort products after filtering
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

  // on Loading
  if (isLoading) {
    return <p>Loading...</p>;
  }
  // on Error
  if (isError) {
    return (
      <p>
        An error has occured.
        <hr /> {error.message}
        <hr /> please refresh the page
      </p>
    );
  }

  //-----------------------------------------------------------------------

  return (
    <div>
      <FilterTab setFilter={setFilter} setSort={setSort} />
      <ProductGrid products={filteredProducts} token={token} />
    </div>
  );
}

export default AllProducts;
