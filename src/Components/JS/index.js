import React,{Component} from "react";
import ReactDOM from "react-dom";

class XC extends Component {
  componentDidMount() {
 
  }
  render() {
    return (
      <div className="App" ref={el => (this.div = el)}>        <h1>Hello react</h1>
        {/* Script is inserted here */}
      </div>
    );
  }
}

export default XC;