/* eslint-disable react/jsx-key */
"use client";
import React from "react";
import { useState, useEffect } from "react";

export interface todos {
  id: number;
  title: string;
  completed: boolean;
}

const Todo = () => {
  const [todos, setTodos] = useState<todos[]>([]);
  const [todoName, setTodoName] = useState<string>("");

  useEffect(() => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      setTodos(JSON.parse(todos));
    }
  }, []);

  const addTodos = () => {
    const newTodo = {
      id: Math.random(),
      title: todoName,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTodoName("");
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const checkTodo = (id: number) => {
    const newTodos = todos.map((t) => {
      if (t.id === id) {
        t.completed = !t.completed;
      }
      return t;
    });
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className="h-full w-full flex justify-center items-center flex-col space-y-10 font-sans">
      <div className="text-black p-4 flex flex-col space-y-2 justify-center">
        <textarea
        className="rounded p-1"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <button
          className="p-4 m-4 bg-blue-500 rounded-xl text-white font-bold hover:bg-blue-700"
          onClick={addTodos}
        >
          Add To-Do
        </button>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        {todos.map((todo) => {
          return (
            <div className="flex justify-between items-center w-1/3 p-2 my-2 rounded bg-gray-700 bg-opacity-40 border border-solid border-gray-800">
              <div className="flex flex-row space-x-2">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => {
                    checkTodo(todo.id);
                  }}
                />
              </div>
              <div className="text-xl">{todo.title}</div>
              <div className="text-xl">
                {todo.completed ? "Completed" : "Not Completed"}
              </div>
              <button className="p-2 bg-red-600 rounded text-white" onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
