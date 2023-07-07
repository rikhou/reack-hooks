import React, { useLayoutEffect, useState, useEffect } from "react";

function MyApp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 0) {
      const randomNum = 10 + Math.random() * 200;
      setCount(randomNum);
    }
  }, [count]);

  return <div onClick={() => setCount(0)}>{count}</div>;
}

export default MyApp;
