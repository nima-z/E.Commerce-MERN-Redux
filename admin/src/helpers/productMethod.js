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

import { publicRequest, adminRequest } from "./requestMethod";
//==============================================

export async function getProducts(dispatch) {
  dispatch(getProductsStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductsSuccess(res.data.products));
  } catch (err) {
    dispatch(getProductsFailure());
  }
}

export async function createProduct(dispatch, token, newProduct) {
  dispatch(createProductsStart());
  try {
    const res = await adminRequest(token).post(`/products`, { ...newProduct });
    dispatch(createProductsSuccess(res.data.product));
  } catch (err) {
    dispatch(createProductsFailure());
  }
}

export async function updateProduct(dispatch, token, pId, updatedItem) {
  dispatch(updateProductsStart());
  try {
    const res = await adminRequest(token).patch(`/products/${pId}`, {
      ...updatedItem,
    });
    dispatch(updateProductsSuccess(res.data.product));
  } catch (err) {
    dispatch(updateProductsFailure());
  }
}

export async function deleteProduct(dispatch, pId, token) {
  dispatch(deleteProductsStart());
  try {
    const res = await adminRequest(token).delete(`/products/${pId}`);
    dispatch(deleteProductsSuccess(res.data.product));
  } catch (err) {
    dispatch(deleteProductsFailure());
  }
}
