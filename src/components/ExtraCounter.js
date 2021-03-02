import React from "react";
import Button from "../components/Buttons.js";

class ExtraCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleAddCounter = this.handleAddCounter.bind(this);
  }

  // method 1: MUST bind
  handleAddCounter() {
    this.setState((state) => {
      return { counter: state.counter + 1 };
    });
  }

  // method 2: using arrow funciton ignores loccal scope
  handleSubtractCounter = () => {
    if (this.state.counter > 0) {
      this.setState((state) => {
        return { counter: state.counter - 1 };
      });
    }
  };

  render() {
    return (
      <div>
        <h1 className="counter">Counter: {this.state.counter}</h1>
        <Button primary={true} onClick={this.handleAddCounter}>
          +
        </Button>
        <Button primary={true} onClick={this.handleSubtractCounter}>
          -
        </Button>
        {/* method 3: */}
        <Button
          primary={true}
          onClick={() =>
            this.setState((state) => {
              return { counter: 0 };
            })
          }
        >
          RESET
        </Button>
      </div>
    );
  }
}

export default ExtraCounter;
