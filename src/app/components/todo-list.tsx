import { TODO } from "../types/todo";

const TodoList = ({
  todos,
  onSelect,
}: {
  todos: TODO[];
  onSelect: (todo: TODO) => void;
}) => {
  return (
    <div className="w-1/3 p-4 border">
      <h2 className="font-bold mb-2">All Todos</h2>
      <ul>
        {todos.map((todo) => (
          <button
            key={todo.name}
            className="cursor-pointer block hover:bg-gray-200 hover:text-black rounded-lg p-2"
            onClick={() => onSelect(todo)}
          >
            {todo.name}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
