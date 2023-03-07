import React, { useState } from "react";

export default function Todo() {
  const [items, setItems] = useState([
    "Đi chợ",
    "Lau nhà",
    "Rửa chén",
    "Giặt đồ",
    "Đi làm",
  ]);

  // let jsx = [];

  // items.forEach((item) => {
  //   jsx.push(
  //     <div className="card mt-2">
  //       <div className="card-body">{item}</div>
  //     </div>
  //   );
  // });

  // const jsx = items.map((item) => (
  //   <div className="card mt-2">
  //     <div className="card-body">{item}</div>
  //   </div>
  // ));

  const addNewItem = () => {
    setItems([`New Item ${items.length + 1}`, ...items]);
  };

  const removeItem = (index) => {
    // const newItems = items.filter((x) => x !== item);
    // setItems(newItems);

    // const index = items.indexOf(item);

    const deletedItems = items.splice(index, 1);
    console.log("deletedItems ", deletedItems);
    console.log("items ", items);
    setItems([...items]);
  };

  const append = () => {
    setItems([...items, `New Item ${items.length + 1}`]);
  };

  const prepend = () => {
    setItems([`New Item ${items.length + 1}`, ...items]);
  };

  return (
    <div className="row mt-3">
      <div className="col-md-4">
        {/* <button
          type="button"
          onClick={addNewItem}
          className="btn btn-secondary"
        >
          Add new Item
        </button> */}

        <button onClick={append}>Append</button>
        <button onClick={prepend}>Prepend</button>

        {items.map((item, index) => (
          <div className="card mt-2" key={index}>
            <div className="card-body d-flex justify-content-between">
              <input type="text" defaultValue={item}></input>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => removeItem(index)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        {/* <div className="card mt-2">
          <div className="card-body">{items[0]}</div>
        </div>
        <div className="card mt-2">
          <div className="card-body">{items[1]}</div>
        </div>
        <div className="card mt-2">
          <div className="card-body">{items[2]}</div>
        </div>
        <div className="card mt-2">
          <div className="card-body">{items[3]}</div>
        </div>
        <div className="card mt-2">
          <div className="card-body">{items[4]}</div>
        </div> */}
      </div>
    </div>
  );
}
