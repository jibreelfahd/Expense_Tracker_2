import React from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const chooseYear = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expense-filter">
      <div className="expense-filter__control">
        <label>Filter By Year</label>
        <select value={props.selected} onChange={chooseYear}>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
