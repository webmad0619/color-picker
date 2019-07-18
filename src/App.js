import React from 'react';
import './App.css';
import Colorpicker from './colorPicker';

class App extends React.Component {
  state = {
    color1: "#ffcc00"
  }

  changeColor() {
    this.setState({
      ...this.state,
      color1: "#0000ff"
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick = {() => this.changeColor()}>Change the color</button>
        <Colorpicker></Colorpicker>
        <Colorpicker chosenColor={this.state.color1}></Colorpicker>
        <Colorpicker chosenColor="#00ff00"></Colorpicker>
      </div>
    );
  }
}

export default App;
