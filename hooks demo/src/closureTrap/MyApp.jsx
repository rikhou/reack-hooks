import { useState, useEffect, useCallback } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const onTick = () => {
    setCount(count + increment);
  };

  useEffect(() => {
    const id = setInterval(onTick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <h1>
        计数器：{count}
        <button onClick={() => setCount(0)}>重制</button>
      </h1>
      <hr />
      <p>
        每秒递增：
        <button
          disabled={increment === 0}
          onClick={() => {
            setIncrement((i) => i - 1);
          }}
        >
          –
        </button>
        <b>{increment}</b>
        <button
          onClick={() => {
            setIncrement((i) => i + 1);
          }}
        >
          +
        </button>
      </p>
    </>
  );
}
