import React, { useState, useEffect, useCallback } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { v4 as uuid } from "uuid";

const TodoApp = () => {
  const initialTodos = [
    { id: 1, task: "Learn Next", completed: false },
    { id: 2, task: "Learn React Hooks", completed: true },
    { id: 3, task: "Learn Redux", completed: false },
  ];
  const Local_key = "_todo_";
  const [todos, setTodos] = useState(initialTodos);

  const addNewTodo = (newTask) => {
    setTodos([...todos, { id: uuid(), task: newTask, completed: false }]);
  };

  const updateTodo = useCallback((todoId, newTask) => {
    setTodos((todos) =>
      todos?.map((todo) =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((todoId) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== todoId));
  }, []);

  useEffect(() => {
    localStorage.setItem(Local_key, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(Local_key));
    setTodos(data);
  }, []);

  return (
    <div className="flex flex-col justify-center p-5">
      <div className="text-3xl font-bold underline text-gray-700">
        Todo List
      </div>
      <TodoForm addNewTodo={addNewTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoApp;
