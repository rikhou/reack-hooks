import { useMemo, memo } from "react";
import { filterTodos } from "./utils";

function TodoList({ todos, tab, onDeleteItem }) {
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
        {visibleTodos.map((todo) => {
          let startTime = performance.now();
          while (performance.now() - startTime < 10) {
            // Do nothing for 500 ms to emulate extremely slow code
          }
          return (
            <li key={todo.id}>
              {todo.completed ? <s>{todo.text}</s> : todo.text}
              <button onClick={() => onDeleteItem(todo)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default memo(TodoList);
