import logo from "./logo.svg";
import "./App.css";
import AddNewExpenseForm from "./Components/AddNewExpenseForm/AddNewExpenseForm";
import ExpenseList from "./Components/ExpenseList/ExpenseList";
import ExpenseFilter from "./Components/ExpenseFilter/ExpenseFilter";

import { useState } from "react";

function generateId() {
  return Math.floor(Math.random() * Date.now());
}

const initData = [
  {
    id: generateId(),
    name: "Mua qua 14/2",
    amount: 250000,
    date: "2023-02-14",
  },
  {
    id: generateId(),
    name: "Mua hang nam 2022",
    amount: 250000,
    date: "2022-02-14",
  },
  {
    id: generateId(),
    name: "Mua qua 8/3",
    amount: 100000,
    date: "2023-03-06",
  },
];

function App() {
  const [items, setItems] = useState(initData);
  const [displayItems, setDisplayItems] = useState(initData);
  const [filterValue, setFilterValue] = useState({
    year: "2023",
    month: "01",
  });

  const handleAddNew = (newItem) => {
    setItems([
      {
        id: generateId(),
        ...newItem,
      },
      ...items,
    ]);
  };

  const handleFilterChange = (newValue) => {
    setFilterValue(newValue);
    const filteredItems = items.filter((item) => {
      return new Date(item.date).getFullYear() === +newValue.year;
    });
    setDisplayItems(filteredItems);
  };

  return (
    <div className="expense-app">
      <AddNewExpenseForm onAddNew={handleAddNew} />
      <ExpenseFilter value={filterValue} onChange={handleFilterChange} />
      <ExpenseList items={displayItems} />
    </div>
  );
}

export default App;
