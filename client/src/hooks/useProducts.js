import { useQuery } from "react-query";
import axios from "axios";

export default function useProducts(category) {
  return useQuery(["products", category ? category : "all"], () =>
    axios
      .get(category ? `/api/products?qcategory=${category}` : `/api/products`)
      .then((res) => res.data)
  );
}
