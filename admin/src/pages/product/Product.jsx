import "./product.css";
import { Publish } from "@material-ui/icons";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct } from "../../helpers/productMethod";
import { useState } from "react";

export default function Product() {
  const [input, setInput] = useState({});
  const params = useParams();
  const dispatch = useDispatch();
  const { productId } = params;

  const product = useSelector((state) =>
    state.product.products.find((item) => item._id === productId)
  );

  function changeHandler(e) {
    const name = e.target.name;
    setInput((prev) => ({ ...prev, [name]: e.target.value }));
  }

  function updateHandler(id) {
    updateProduct(dispatch, id, input);
  }

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">{product.title}</h1>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src={product.image}
              alt={product.title}
              className="productInfoImg"
            />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">5123</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">{product.inStock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input
              type="text"
              placeholder={product.title}
              name="title"
              onChange={changeHandler}
            />
            <label>Description</label>
            <input
              type="text"
              placeholder={product.desc}
              name="description"
              onChange={changeHandler}
            />
            <label>Price</label>
            <input
              type="text"
              placeholder={product.price}
              name="price"
              onChange={changeHandler}
            />
            <label>In Stock</label>
            <input
              type="number"
              placeholder={product.inStock}
              name="inStock"
              onChange={changeHandler}
            />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src={product.image}
                alt={product.title}
                className="productUploadImg"
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button
              className="productButton"
              onClick={() => {
                updateHandler(product._id);
              }}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
