import { forwardRef, useRef, useImperativeHandle } from "react";

const MyInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus();
        },
      };
    },
    []
  );

  return <input {...props} ref={inputRef} />;
});

export default function MyApp() {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
  }

  return (
    <>
      <MyInput ref={ref} />
      <button onClick={handleClick}>focus</button>
    </>
  );
}
