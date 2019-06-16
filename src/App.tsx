import React, { Props } from 'react';
import './App.css';
import LOCAL_STORAGE_FIELD from './CONFIG';
import autobind from './utils/autobind';

export default class App extends React.Component<Props<any>, {}> {
  public state: any;
  constructor(props: any) {
    super(props);
    const list = LOCAL_STORAGE_FIELD.list.length === 0 ? [] : LOCAL_STORAGE_FIELD.list.split(',');
    this.state  = {
      list,
      inputValue: '',
    };
  }

  @autobind
  private updateView() {
    // 值合法，再执行
    if(!!this.state.inputValue) {
      this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: '',
      }, () => localStorage.setItem('list', this.state.list));
    }
  }
  public keypress = (e: React.KeyboardEvent) =>  e.which === 13 ? this.updateView(): '';

  @autobind
  public handleChange(e:any) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  @autobind
  public deleteItem(i: number){
   const list = [...this.state.list];
   list.splice(i,1);
   this.setState({
      list,
    }, () => localStorage.setItem('list', list.join(',')));
  }
  public render() {
    return (
      <div className="App">
        <ul>
          <input type="text" value={this.state.inputValue} onKeyPress={this.keypress.bind(this)} onChange={this.handleChange} />
          <button onClick={this.updateView}>添加</button>
        </ul>
        <ul>
         {
           this.state.list.map((item: string, index: number) => {
             return (
              <li key={index}>
                <span>{item}</span> 
                <button onClick={this.deleteItem.bind(this,index)}>删除</button>
              </li>
             );
           })
         }
        </ul>
      </div>
    );
  }
}

