import React, { useState } from "react";

export default function EditBudget(props) {
  const [value, setValue] = useState(props.budget);

  return (
    <>
      <input
        required="required"
        type="number"
        className="form-control mr-3 w-75"
        id="name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => props.handleSaveClick(value)}
      >
        Save
      </button>
    </>
  );
}
