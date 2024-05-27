import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New Desk",
    amount: 34.44,
    date: new Date(2021, 5, 6),
  },
  {
    id: "e3",
    title: "Laborghini",
    amount: 234.44,
    date: new Date(2022, 11, 9),
  },
  {
    id: "e4",
    title: "Brand New Laptop",
    amount: 234.67,
    date: new Date(2019, 6, 10),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const recieveExpenseData = (expenseData) => {
    setExpenses((prevExpenes) => {
      return [...prevExpenes, expenseData];
    });
  };
  return (
    <div>
      <NewExpense onAddExpenseData={recieveExpenseData} />
      <Expenses expense={expenses} />
    </div>
  );
};

export default App;
