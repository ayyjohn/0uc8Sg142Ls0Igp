import React from 'react';

class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      num1: "",
      num2: "",
    };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubtract = this.handleSubtract.bind(this);
    this.handleMultiply = this.handleMultiply.bind(this);
    this.handleDivide = this.handleDivide.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleClear(e) {
    e.preventDefault();
    this.setState({
      result: 0,
      num1: "",
      num2: "",
    });
  }

  handleAdd(e) {
    e.preventDefault();
    const { num1, num2 } = this.state;
    const result = num1 + num2;
    this.setState({
      result
    });
  }

  handleSubtract(e) {
    e.preventDefault();
    const { num1, num2 } = this.state;
    const result = num1 - num2;
    this.setState({
      result
    });
  }

  handleMultiply(e) {
    e.preventDefault();
    const { num1, num2 } = this.state;
    const result = num1 * num2;
    this.setState({
      result
    });
  }

  handleDivide() {
    event.preventDefault();
    const { num1, num2 } = this.state;
    const result = num1 / num2;
    this.setState({
      result
    });
  }

  setNum1(e) {
    const num1 = e.currentTarget.value ? parseInt(e.currentTarget.value) : "";
    this.setState({
      num1
    });
  }

  setNum2(e) {
    const num2 = e.currentTarget.value ? parseInt(e.currentTarget.value) : "";
    this.setState({
      num2
    });
  }

  render() {
    const {num1, num2, result} = this.state;
    return (
      <div>
        <input
          onChange={this.setNum1}
          value={num1}></input>
        <input
          onChange={this.setNum2}
          value={num2}></input>
        <button onClick={this.handleAdd}> + </button>
        <button onClick={this.handleSubtract}> - </button>
        <button onClick={this.handleMultiply}> x </button>
        <button onClick={this.handleDivide}> / </button>
        <button onClick={this.handleClear}> clear </button>
        <h1>{result}</h1>
      </div>
    );
  }
}

export default Calculator;
