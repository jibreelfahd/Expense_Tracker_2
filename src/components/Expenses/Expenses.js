import React, { useState } from "react";

import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = ({ expense }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  //setting the selected state from the user
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // filtering the expenses by year
  const filteredExpenses = expense.filter((filteredData) => {
    return filteredData.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart filteredExpense={filteredExpenses} />
      <ExpenseList expenseItems={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
