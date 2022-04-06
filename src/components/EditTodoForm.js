import React from "react";
import useInputState from "../hooks/useInputState";

const EditTodoForm = ({ updateTodo, id, task, toggleEditForm }) => {
  const [editValue, handleChange, reset] = useInputState(task);
  const [cancel, setCancel] = React.useState(false);

  const handleCancel = () => {
    setCancel(true);
  };

  return (
    <div className="py-3">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateTodo(id, editValue);
          reset();
          toggleEditForm();
        }}
        noValidate
        autoComplete="off"
        cancel={cancel}
      >
        <div className="flex flex-col sm:flex-row">
          <input
            className="form-input rounded p-3 sm:mr-3 w-full sm:w-3/5"
            value={editValue}
            onChange={handleChange}
            id="standard-basic"
            label="Todo"
          />
          <div className="w-full sm:w-1/4">
            <div className="sm:px-2 py-1">
              <button
                className="rounded bg-green-500 p-3 font-bold w-full sm:w-1/2 "
                type="submit"
              >
                Save
              </button>
            </div>
            <div className="sm:px-2">
              <button
                className="rounded bg-gray-300 p-3 font-bold w-full sm:w-1/2"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditTodoForm;
