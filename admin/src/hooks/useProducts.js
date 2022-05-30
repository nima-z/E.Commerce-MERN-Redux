import { userRequest, publicRequest } from "../helpers/requestMethod";

import { useQuery } from "react-query";

export default function useProducts() {
  return useQuery(["products", "all"], () =>
    publicRequest("/products").then((res) => res.data.products)
  );
}
