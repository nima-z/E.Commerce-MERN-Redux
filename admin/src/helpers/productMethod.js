import {
  deleteProductsFailure,
  deleteProductsStart,
  deleteProductsSuccess,
  getProductsFailure,
  getProductsStart,
  getProductsSuccess,
  updateProductsFailure,
  updateProductsStart,
  updateProductsSuccess,
  createProductsFailure,
  createProductsStart,
  createProductsSuccess,
} from "../redux/productRedux";

import { publicRequest, userRequest } from "./requestMethod";

export async function getProducts(dispatch) {
  dispatch(getProductsStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductsSuccess(res.data.products));
  } catch (err) {
    dispatch(getProductsFailure());
  }
}

export async function deleteProduct(dispatch, pId) {
  dispatch(deleteProductsStart());
  try {
    const res = await userRequest.delete(`/products/${pId}`);
    dispatch(deleteProductsSuccess(res.data.product));
  } catch (err) {
    dispatch(deleteProductsFailure());
  }
}

export async function updateProduct(dispatch, pId, updatedItem) {
  dispatch(updateProductsStart());
  try {
    const res = await userRequest.patch(`/products/${pId}`, { ...updatedItem });
    dispatch(updateProductsSuccess(res.data.product));
  } catch (err) {
    dispatch(updateProductsFailure());
  }
}

export async function createProduct(dispatch, newProduct) {
  dispatch(createProductsStart());
  try {
    const res = await userRequest.post(`/products`, { ...newProduct });
    dispatch(createProductsSuccess(res.data.product));
  } catch (err) {
    dispatch(createProductsFailure());
  }
}
