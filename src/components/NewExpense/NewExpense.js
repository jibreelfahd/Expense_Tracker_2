import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const addExpenseData = (enteredData) => {
    const expensesData = {
      ...enteredData,
      id: Math.random().toString(),
    };

    //passing the data up to App
    props.onAddExpenseData(expensesData);
  };

  //changing state of the 'Add Expense' and 'Cancel' button
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
      {isEditing && (
        <ExpenseForm
          onCancel={stopEditingHandler}
          onChangeExpenseData={addExpenseData}
        />
      )}
    </div>
  );
};

export default NewExpense;
