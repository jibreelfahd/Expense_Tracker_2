import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [tittleEntered, setTittleEntered] = useState("");
  const [amountEntered, setAmountEntered] = useState("");
  const [dateEntered, setDateEntered] = useState("");

  const tittleChangeHandler = (event) => {
    setTittleEntered(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmountEntered(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDateEntered(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: tittleEntered,
      amount: amountEntered,
      date: new Date(dateEntered),
    };

    //lifting the state up and passing data to NewExpense
    props.onChangeExpenseData(expenseData);

    //two way binding
    setTittleEntered("");
    setAmountEntered("");
    setDateEntered("");
  };
  return (
    <form onSubmit={formHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Tittle</label>
          <input
            type="text"
            name="tittle"
            value={tittleEntered}
            onChange={tittleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amountEntered}
            name="amount"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            name="date"
            value={dateEntered}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
