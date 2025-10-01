import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

export default function ExpenseItem(props) {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <div>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {props.name}
        <div>
          <span className="mr-3 bg-primary rounded text-white p-1">
            ${props.cost}
          </span>
          <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
        </div>
      </li>
    </div>
  );
}
