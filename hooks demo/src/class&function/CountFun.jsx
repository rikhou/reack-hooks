import { useState } from "react";

function CountFun() {
  const [age, setAge] = useState(18);
  let count = 0;

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          count = count + 1;
          console.log(count);
        }}
      >
        count
      </button>
      <p>age: {age}</p>
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        age
      </button>
    </div>
  );
}

export default CountFun;
