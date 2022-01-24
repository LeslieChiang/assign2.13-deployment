import "./App.css";

import React, { useState } from "react";
import uuid from "react-uuid";

function App() {
  const [items, setItems] = useState([]); // set empty array
  const [inputText, setInputText] = useState({ // initial state
    productName: "",
    productPrice: "",
  });

  function handleChange(event) {
    // input change productName + productPrice
    const { name, value } = event.target;
    setInputText((prevInput) => {
      return {
        ...prevInput, // spread operator
        [name]: value, // e.target.name: e.target.value
      };
    });
  }

  function addItem(event) {
    // add to items array
    if (
      inputText.productName.length !== 0 &&
      inputText.productPrice.length !== 0
    ) {
      setItems((items) => {
        return [...items, inputText];
      });
      setInputText({
        // reset input fields
        productName: "",
        productPrice: "",
      });
    }
    event.preventDefault();
  }

  function deleteItem(event) {
    console.log("Delete event", event.target.innerText.split(",")[0]);
    const deleteName = event.target.innerText.split(",")[0];

    // console.log("Delete event", event.target.textContent.split(",")[0]);
    // const deleteName = event.target.textContent.split(",")[0];

    setItems((items) => {
      return items.filter((item) => {
        return item.productName !== deleteName;
      });
    });
  }

  // console.log("inputText: ", inputText);
  // console.log("items: ", items);

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>Shopping List</h1>
        </div>
        <form className="form" onSubmit={addItem}>
          <label>Product: </label>
          <input
            onChange={handleChange}
            type="text"
            name="productName"
            placeholder="Enter product item"
            value={inputText.productName}
          />
          <br />
          <label>Price: </label>
          <input
            onChange={handleChange}
            type="number"
            min={0}
            name="productPrice"
            placeholder="Key in product price"
            value={inputText.productPrice}
          />
          <br />
          <button>
            <span>Add Item</span>
          </button>
        </form>
      </div>
      <br />
      <div className="container">
        {/* // add <li onClick> and use filter fn to delete item  */}
        <ul>
          {items.map((itemList) => (
            <li key={uuid()} onClick={deleteItem}>
              {`${itemList.productName}, $${itemList.productPrice}`}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
