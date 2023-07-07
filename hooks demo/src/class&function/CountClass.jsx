import { Component } from "react";

class CountClass extends Component {
  state = { age: 18 };
  count = 0;

  render() {
    return (
      <div>
        <p>You clicked {this.count} times</p>
        <button
          onClick={() => {
            this.count = this.count + 1;
            console.log(this.count);
          }}
        >
          count
        </button>
        <p>age: {this.state.age}</p>
        <button
          onClick={() => {
            this.setState({ age: this.state.age + 1 });
          }}
        >
          age
        </button>
      </div>
    );
  }
}

export default CountClass;
