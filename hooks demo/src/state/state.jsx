// React useState hooks
const React = (function () {
  let hooks = [];
  let idx = 0;

  return {
    render(Component) {
      const C = Component();
      C.render();
      idx = 0; // reset for next render
      return C;
    },
    useState(initVal) {
      const state = hooks[idx] || initVal;
      const _idx = idx;
      const setState = (newVal) => {
        hooks[_idx] = newVal;
      };
      idx++;
      return [state, setState];
    },
  };
})();

// Component which use useState
const { useState, render } = React;
function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("apple");

  return {
    render() {
      console.log(`text: ${text}, count: ${count}`);
    },
    click() {
      setCount(count + 1);
    },
    type(type) {
      setText(type);
    },
  };
}

// simulate render
const counter = render(Counter); // text: apple, count: 0
counter.click();
render(Counter); // text: apple, count: 1
counter.type("pear");
render(Counter); //text: pear, count: 1
