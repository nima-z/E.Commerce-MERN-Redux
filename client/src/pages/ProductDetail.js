import SingleProduct from "../components/Products/SingleProduct";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    async function getProduct() {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        const data = res.data.product;
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    }
    getProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  } else {
    return <SingleProduct item={product} />;
  }
}
