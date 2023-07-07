import React, { useReducer, useState } from "react";

const initState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: state.length,
          name: action.name,
        },
      ];

    case "remove":
      return state.filter((_, index) => index != action.index);

    case "clear":
      return [];
    default:
      return state;
  }
};

export default function ShoppingList() {
  const [name, setName] = useState();
  const [items, dispatch] = useReducer(reducer, initState);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({
      type: "add",
      name,
    });
    setName("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </form>
      <button onClick={() => dispatch({ type: "clear" })}>clear</button>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => dispatch({ type: "remove", index })}>
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
