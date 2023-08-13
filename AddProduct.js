import { useState } from "react";
import "./product.css";
import ProductList from "./ProductList";

function AddProduct() {
  let [text, setText] = useState("");
  let [list, setList] = useState(JSON.parse(localStorage.getItem("list")) || []);

  let changeText = (event) => {
    let newText = event.target.value;
    setText(newText);
  };
  let saveList = () => {

    if(text !== ""){
      let newList = [{ id: `${text}-${Date.now()}`, text },...list];
      setList(newList);
      setText("");
    }
  };

  const removeElem = (id) => {
    //alert("Hii" +" " +id);
    const newSet = list.filter((to) => to.id !== id);
    setList([...newSet]);
  };

  return (
    <>
      <div className="container">
        <h1 className="heading mb-5">Add Your List Here!!</h1>
        <div className="input-wp d-flex">
          <input
            type="text"
            className="form-control"
            placeholder="enter your task"
            onChange={changeText}
            value={text}>
          </input>
          <button onClick={saveList} className="btn btn-outline-dark ms-3">
            Save
          </button>
        </div>
        <ProductList
          list={list}
          removeElem={removeElem}
          text={text}
        />

      </div>
    </>
  );
}

export default AddProduct;
