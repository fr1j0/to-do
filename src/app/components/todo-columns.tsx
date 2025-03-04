import { TODO, TODO_TYPES } from "../types/todo";

const TodoColumns = ({
  selectedTodos,
  onSelect,
}: {
  selectedTodos: TODO[];
  onSelect: (todo: TODO) => void;
}) => {
  return (
    <div className="flex gap-4 w-2/3">
      {TODO_TYPES.map((type) => {
        const filteredTodos = selectedTodos.filter(
          (todo) => todo.type === type
        );

        return (
          <div key={type} className="w-1/2 p-4 border">
            <h2 className="font-bold mb-2">{type}</h2>
            <ul>
              {filteredTodos.length > 0 ? (
                filteredTodos.map((todo) => (
                  <button
                    key={todo.name}
                    className="cursor-pointer block hover:bg-gray-200 hover:text-black rounded-lg p-2"
                    onClick={() => onSelect(todo)}
                  >
                    {todo.name}
                  </button>
                ))
              ) : (
                <p className="text-gray-400 italic">No items</p>
              )}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default TodoColumns;
