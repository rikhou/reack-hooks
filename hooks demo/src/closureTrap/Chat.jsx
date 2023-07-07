import { useState, useCallback } from "react";

function Chat() {
  const [text, setText] = useState("");

  // useEvent
  const onClick = useCallback(() => {
    alert(text);
  }, []);

  return (
    <>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={onClick}>click</button>
    </>
  );
}

export default Chat;
