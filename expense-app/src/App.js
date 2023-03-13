import "./App.css";

import { useState, useEffect } from "react";

import AddNewExpenseForm from "./Components/AddNewExpenseForm/AddNewExpenseForm";
import ExpenseList from "./Components/ExpenseList/ExpenseList";
import ExpenseFilter from "./Components/ExpenseFilter/ExpenseFilter";
import ExpenseChart from "./Components/ExpenseChart/ExpenseChart";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";
import { useAuth } from "./Context/AuthContext";
import { TranslationProvider } from "./Context/TranslationContext";

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
  const { loggedInUser } = useAuth();

  const [items, setItems] = useState(initData);
  const [displayItems, setDisplayItems] = useState(initData);
  const [filterValue, setFilterValue] = useState({
    year: new Date().getFullYear(),
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

  const handleFilterChange = (value) => {
    setFilterValue(value);
  };

  useEffect(() => {
    const filteredItems = items.filter((item) => {
      return new Date(item.date).getFullYear() === +filterValue.year;
    });
    setDisplayItems(filteredItems);
  }, [items, filterValue]);

  return (
    <TranslationProvider>
      <div className="expense-app">
        {loggedInUser ? (
          <>
            <AddNewExpenseForm onAddNew={handleAddNew} />
            <div className="card mt-4">
              <div className="card-body">
                <ExpenseFilter
                  filterValue={filterValue}
                  onChange={handleFilterChange}
                />
                <ExpenseChart items={displayItems} />
                <ExpenseList items={displayItems} />
              </div>
            </div>
          </>
        ) : (
          <Login />
        )}

        <Footer />
      </div>
    </TranslationProvider>
  );
}

export default App;
