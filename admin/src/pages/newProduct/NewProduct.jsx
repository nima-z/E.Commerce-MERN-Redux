import { useState } from "react";
import "./newProduct.css";
import { createProduct } from "../../helpers/productMethod";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function NewProduct() {
  const [input, setInput] = useState();
  const [cat, setCat] = useState("");
  const [tag, setTag] = useState([]);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  function changeHandler(e) {
    const name = e.target.name;
    setInput((prev) => ({ ...prev, [name]: e.target.value }));
  }

  function catHandler(e) {
    setCat(e.target.value);
  }

  function tagHandler(e) {
    if (e.target.checked) {
      setTag((prev) => [...prev, e.target.name]);
    } else {
      setTag(tag.filter((item) => item !== e.target.name));
    }
  }
  function colorHandler(e) {
    if (e.target.checked) {
      setColor((prev) => [...prev, e.target.name]);
    } else {
      setColor(color.filter((item) => item !== e.target.name));
    }
  }
  function sizeHandler(e) {
    if (e.target.checked) {
      setSize((prev) => [...prev, e.target.name]);
    } else {
      setSize(size.filter((item) => item !== e.target.name));
    }
  }

  function createHandler(e) {
    e.preventDefault();
    const product = {
      ...input,
      category: cat,
      image: "",
      tag: [cat, ...tag, ...size, ...color],
      color,
      size,
    };
    createProduct(dispatch, product);
    history.push("/products");
  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm" onSubmit={createHandler}>
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="Product Name"
            name="title"
            onChange={changeHandler}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={changeHandler}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            type="text"
            placeholder="Price"
            name="price"
            onChange={changeHandler}
          />
        </div>

        <div className="addProductItem">
          <label>Stock</label>
          <input
            type="number"
            placeholder="Quantity in stock"
            name="inStock"
            onChange={changeHandler}
          />
        </div>
        <div className="addProductItem">
          <label>Category</label>
          <div className="checkBoxContainer">
            <div className="checkBoxItem">
              <input
                type="radio"
                name="category"
                id="hat"
                value="hat"
                onChange={catHandler}
              />
              <label htmlFor="hat">Hat</label>
            </div>
            <div className="checkBoxItem">
              <input
                type="radio"
                name="category"
                id="shoes"
                value="shoes"
                onChange={catHandler}
              />
              <label htmlFor="shoes">Shoes</label>
            </div>
            <div className="checkBoxItem">
              <input
                type="radio"
                name="category"
                id="skirt"
                value="skirt"
                onChange={catHandler}
              />
              <label htmlFor="skirt">Skirt</label>
            </div>
            <div className="checkBoxItem">
              <input
                type="radio"
                name="category"
                id="jeans"
                value="jeans"
                onChange={catHandler}
              />
              <label htmlFor="jeans">Jeans</label>
            </div>
            <div className="checkBoxItem">
              <input
                type="radio"
                name="category"
                id="shirt"
                value="shirt"
                onChange={catHandler}
              />
              <label htmlFor="shirt">Shirt</label>
            </div>
            <div className="checkBoxItem">
              <input
                type="radio"
                name="category"
                id="perfume"
                value="perfume"
                onChange={catHandler}
              />
              <label htmlFor="perfume">Perfume</label>
            </div>
          </div>
        </div>
        <div className="addProductItem">
          <label>Tag</label>
          <div className="checkBoxContainer">
            <div className="checkBoxItem">
              <input
                type="checkbox"
                name="women"
                id="women"
                onChange={tagHandler}
              />
              <label htmlFor="women">Women</label>
            </div>
            <div className="checkBoxItem">
              <input
                type="checkbox"
                name="men"
                id="men"
                onChange={tagHandler}
              />
              <label htmlFor="men">Men</label>
            </div>

            <div className="checkBoxItem">
              <input
                type="checkbox"
                name="children"
                id="children"
                onChange={tagHandler}
              />
              <label htmlFor="children">Children</label>
            </div>
          </div>
        </div>
        <div className="addProductItem">
          <label>Color</label>
          <div className="checkBoxContainer">
            <div className="checkBoxItem">
              <input
                type="checkbox"
                name="white"
                id="white"
                onChange={colorHandler}
              />
              <label htmlFor="white">White</label>
            </div>
            <div className="checkBoxItem">
              <input
                type="checkbox"
                name="black"
                id="black"
                onChange={colorHandler}
              />
              <label htmlFor="black">Black</label>
            </div>

            <div className="checkBoxItem">
              <input
                type="checkbox"
                name="red"
                id="red"
                onChange={colorHandler}
              />
              <label htmlFor="red">Red</label>
            </div>
            <div className="checkBoxItem">
              <input
                type="checkbox"
                name="green"
                id="green"
                onChange={colorHandler}
              />
              <label htmlFor="green">Green</label>
            </div>
            <div className="checkBoxItem">
              <input
                type="checkbox"
                name="yellow"
                id="yellow"
                onChange={colorHandler}
              />
              <label htmlFor="yellow">Yellow</label>
            </div>
            <div className="checkBoxItem">
              <input
                type="checkbox"
                name="blue"
                id="blue"
                onChange={colorHandler}
              />
              <label htmlFor="blue">Blue</label>
            </div>
          </div>
        </div>
        <div className="addProductItem">
          <label>Size</label>
          <div className="checkBoxContainer">
            <div className="checkBoxItem">
              <input type="checkbox" name="xs" id="xs" onChange={sizeHandler} />
              <label htmlFor="xs">XS</label>
            </div>
            <div className="checkBoxItem">
              <input type="checkbox" name="s" id="s" onChange={sizeHandler} />
              <label htmlFor="s">S</label>
            </div>

            <div className="checkBoxItem">
              <input type="checkbox" name="m" id="m" onChange={sizeHandler} />
              <label htmlFor="m">M</label>
            </div>
            <div className="checkBoxItem">
              <input type="checkbox" name="l" id="l" onChange={sizeHandler} />
              <label htmlFor="l">L</label>
            </div>
            <div className="checkBoxItem">
              <input type="checkbox" name="xl" id="xl" onChange={sizeHandler} />
              <label htmlFor="xl">XL</label>
            </div>
          </div>
        </div>

        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
