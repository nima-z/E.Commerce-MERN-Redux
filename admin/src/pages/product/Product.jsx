import { useState } from "react";
import { Publish } from "@material-ui/icons";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
//==============================================
import app from "../../firebase";
import { updateProduct } from "../../helpers/productMethod";
import "./product.css";
//==============================================

export default function Product({ token }) {
  const [input, setInput] = useState({});
  const [file, setFile] = useState();
  //---
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  //---
  const { productId } = params;
  const product = useSelector((state) =>
    state.product.products.find((item) => item._id === productId)
  );

  // preparing image file to upload
  const fileName = file && new Date().getTime() + file.name;
  const storage = getStorage(app);
  const storageRef = ref(storage, `images/${fileName}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  //function handlers
  function imageHandler(e) {
    setFile(e.target.files[0]);
  }

  function changeHandler(e) {
    const name = e.target.name;
    setInput((prev) => ({ ...prev, [name]: e.target.value }));
  }

  function updateHandler(e) {
    e.preventDefault();
    if (file) {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              console.log("Upload has no state");
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            updateProduct(dispatch, token, productId, {
              ...input,
              image: downloadURL,
            });
          });
        }
      );
    } else {
      updateProduct(dispatch, token, productId, input);
    }
    history.push("/products");
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
        <form className="productForm" onSubmit={updateHandler}>
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
              <label htmlFor="file" className="uploadIcon">
                <Publish />
              </label>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={imageHandler}
              />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
