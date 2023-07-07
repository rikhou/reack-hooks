import { Component } from "react";

class CountClass1 extends Component {
  state = { age: 18 };

  render() {
    let count = 0;
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => { count = count + 1; console.log(count); }}>count</button>
        <p>age: {this.state.age}</p>
        <button onClick={() => { this.setState({ age: this.state.age + 1 }); }}>age</button>
      </div>
    );
  }
}

export default CountClass1;
