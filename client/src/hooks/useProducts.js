import { useQuery } from "react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function useProducts() {
  const { category } = useParams();

  return useQuery(["products", category ? category : "all"], () =>
    axios
      .get(
        category
          ? `http://localhost:5000/api/products?qcategory=${category}`
          : "http://localhost:5000/api/products"
      )
      .then((res) => res.data)
  );
}
