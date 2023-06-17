import { Component } from "react";
import "./input.css";

class Input extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  changeName = (name) => {
    this.setState({ name: name.target.value });
  };
  render() {
    return (
      <div className="input-container">
        <input
          type="text"
          value={this.state.name}
          onChange={this.changeName}
          className="input"
        />
        <p>{this.state.name}</p>
        <button onClick={() => this.setState({ name: "" })} className="btn">
          Reset
        </button>
      </div>
    );
  }
}
export default Input;
