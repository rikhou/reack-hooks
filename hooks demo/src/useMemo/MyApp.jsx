import { useState } from "react";
import { createTodos } from "./utils";
import TodoList from "./TodoList";
import "./styles.css";

const todos = createTodos();

export default function App() {
  const [tab, setTab] = useState("all");
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isDark}
            onChange={(e) => setIsDark(e.target.checked)}
          />
          Dark mode
        </label>
      </div>
      <div className={isDark ? "dark" : "light"}>
        <button onClick={() => setTab("all")}>All</button>
        <button onClick={() => setTab("active")}>Active</button>
        <button onClick={() => setTab("completed")}>Completed</button>
      </div>
      <br />
      <TodoList todos={todos} tab={tab} />
    </>
  );
}
