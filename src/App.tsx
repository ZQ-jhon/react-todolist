import React, { Props,Fragment,Component } from 'react';
import './App.css';
import LOCAL_STORAGE_FIELD from './CONFIG';
import autobind from './utils/autobind';
import Item from './components/item';
export default class App extends Component<Props<any>, {}> {
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

  @autobind
  public getAllItems() {
    return (
      this.state.list.map((item: string, index: number) => {
        return (
          <Item handleDelete={this.deleteItem} key={index} index={index} content={item} />
      );
    })
    );
  }

  public render() {
    return (
     <Fragment>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="logo"/>
        <div className="App">
          <ul>
            <input type="text" value={this.state.inputValue} onKeyPress={this.keypress.bind(this)} onChange={this.handleChange} />
            <button onClick={this.updateView}>添加</button>
          </ul>
          <ul> {this.getAllItems()} </ul>
        </div>
     </Fragment>
    );
  }
}

