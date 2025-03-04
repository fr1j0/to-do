"use client";

import { useRef, useState } from "react";
import { TODO } from "../types/todo";
import TodoList from "./todo-list";
import TodoColumns from "./todo-columns";

const TodoBoard = ({ initialTodos }: { initialTodos: TODO[] }) => {
  const [availableTodos, setAvailableTodos] = useState<TODO[]>(initialTodos);
  const [selectedTodos, setSelectedTodos] = useState<TODO[]>([]);
  const timeoutsRef = useRef(new Map<string, NodeJS.Timeout>());

  const handleSelect = (todo: TODO) => {
    const isAlreadySelected = selectedTodos.some((t) => t.name === todo.name);

    if (isAlreadySelected) {
      timeoutsRef.current.get(todo.name) &&
        clearTimeout(timeoutsRef.current.get(todo.name)!);
      timeoutsRef.current.delete(todo.name);
    } else {
      timeoutsRef.current.set(
        todo.name,
        setTimeout(() => {
          setSelectedTodos((prev) => prev.filter((t) => t.name !== todo.name));
          setAvailableTodos((prev) => [...prev, todo]);
          timeoutsRef.current.delete(todo.name);
        }, 5000)
      );
    }

    setAvailableTodos((prev) =>
      isAlreadySelected
        ? [...prev, todo]
        : prev.filter((t) => t.name !== todo.name)
    );
    setSelectedTodos((prev) =>
      isAlreadySelected
        ? prev.filter((t) => t.name !== todo.name)
        : [...prev, todo]
    );
  };

  return (
    <div className="flex gap-6 p-6">
      <TodoList todos={availableTodos} onSelect={handleSelect} />
      <TodoColumns selectedTodos={selectedTodos} onSelect={handleSelect} />
    </div>
  );
};

export default TodoBoard;
