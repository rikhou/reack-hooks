import { useMemo, memo } from "react";
import { filterTodos } from "./utils";

function TodoList({ todos, tab }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // const visibleTodos = filterTodos(todos, tab);
  return (
    <div>
      <p>
        <b>
          Note: <code>filterTodos</code> is artificially slowed down!
        </b>
      </p>
      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
