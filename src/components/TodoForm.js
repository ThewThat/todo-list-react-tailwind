import React from "react";
import useInputState from "../hooks/useInputState";

const TodoForm = ({ addNewTodo }) => {
  const [value, handleChange, reset] = useInputState("");

  return (
    <div className="py-3">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addNewTodo(value);
          reset();
        }}
        noValidate
        autoComplete="off"
      >
        <div className="flex flex-col sm:flex-row">
          <input
            className="form-input rounded p-3 sm:mr-3 w-full sm:w-3/5 my-2 sm:my-0"
            value={value}
            onChange={handleChange}
            id="standard-basic"
            label="Todo"
          />
          <button className="bg-blue-500 rounded p-3 font-bold w-full sm:w-1/4">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
