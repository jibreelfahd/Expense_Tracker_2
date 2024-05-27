import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpenseList.css";
const ExpenseList = ({ expenseItems }) => {
  return (
    <ul className="expense-list">
      {expenseItems.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          tittle={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
