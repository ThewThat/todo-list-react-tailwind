import React from "react";
import EditTodoForm from "./EditTodoForm";
import useToggle from "../hooks/useToggle";

const Todo = (props) => {
  const { id, task, updateTodo, deleteTodo } = props;
  const [isEditing, toggle] = useToggle();
  return (
    <div className="w-full space-y-4">
      <ul>
        {isEditing ? (
          <EditTodoForm
            updateTodo={updateTodo}
            id={id}
            task={task}
            toggleEditForm={toggle}
          />
        ) : (
          <div className="text-gray-700 font-bold py-3 text-3xl">{task}</div>
        )}
        <div className="flex flex-col sm:flex-row">
          <div className="py-2 sm:py-0 sm:px-2">
            <button
              onClick={() => toggle()}
              className="rounded bg-purple-500 p-3 w-full sm:w-32 font-bold"
            >
              Edit
            </button>
          </div>
          <div>
            <button
              className="rounded bg-red-500 p-3 w-full sm:w-32 font-bold"
              onClick={() => deleteTodo(id)}
            >
              Delete
            </button>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Todo;
