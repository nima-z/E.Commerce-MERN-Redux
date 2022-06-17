import { useQuery } from "react-query";
import axios from "axios";

export default function useProducts(category) {
  return useQuery(["products", category ? category : "all"], () =>
    axios
      .get(
        category
          ? `${process.env.PORT}/api/products?qcategory=${category}`
          : `${process.env.PORT}/api/products`
      )
      .then((res) => res.data)
  );
}
