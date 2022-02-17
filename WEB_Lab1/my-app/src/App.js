import './App.css';
import { Component } from 'react';
import { render } from 'react-dom';


class Clock extends Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function tick() {
  render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);



function App() {
  return (
        <div>
            <Clock></Clock>
        </div>
  );
}

export default App;