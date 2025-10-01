import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

export default function ExpenseList() {
  const { expenses } = useContext(AppContext);

  // const expenses = [
  //   { id: 1, name: "Shopping", cost: 40 },
  //   { id: 2, name: "Foot", cost: 45 },
  //   { id: 3, name: "Holiday", cost: 400 },
  //   { id: 4, name: "Gas", cost: 30 },
  // ];
  return (
    <ul className="list-group">
      {expenses ? (
        expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))
      ) : (
        <li className="list-group-item d-flex justify-content-between align-items-center">
          No Expenses registered
        </li>
      )}

      {/* {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))} */}
    </ul>
  );
}
