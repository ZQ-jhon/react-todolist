import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
export default class App extends React.Component {
  public num = 0;
  public clickFn = (e: React.KeyboardEvent) =>  {
    if(e.which === 13) {
      this.num  += 1;
      ReactDOM.render(this.render(), document.querySelector('#root'));
    }
  }
  public render() {
    return (
      <div className="App">
        <input type="text" onKeyPress={this.clickFn} />
        {this.num}
      </div>
    );
  }
}

