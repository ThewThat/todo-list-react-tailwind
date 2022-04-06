// TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <div className="py-2">
      {todos?.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
