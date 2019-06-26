import React, { Component, Fragment, Props } from 'react';
import './App.scss';
import autobind from './utils/autobind';
import { v4 } from 'uuid';
import store from './store/store';
import {Provider} from 'react-redux';
import Item from './components/item/item';
import {Payload} from './interfaces/payload.interface';
export default class App extends Component<Props<any>, {}> {
  public state: any;

  /** init hook */
  public componentWillMount() {
    // TODO: adding react-redux
    // /**
    //  * 内部状态 => props 映射，即 事件 => viewModel
    //  * 视图到 modal
    //  */
    // const mapStateToProps: MapStateToProps<string, string, { inputValue: string }> = (state = this.state) => state.inputValue;
    // /**
    //  * dispatch => props 映射，即 数据 => viewModel
    //  * modal 到视图
    //  */
    // const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: string) => {
    //   return {
    //     "ADD_ITEM": (inputs: string) => dispatch({
    //       type: "ADD_ITEM",
    //       payload: {
    //         text: inputs,
    //         uuid: v4(),
    //       },
    //     }),
    //     "DELETE_ITEM": (uuid: string) => dispatch({
    //       type: "DELETE_ITEM",
    //       payload: {
    //         text: '',
    //         uuid
    //       },
    //     }),
    //   }
    // }
    // /**
    //  * connect 两个 map 函数为：
    //  * [1] => 视图到 modal
    //  * [2] => modal 到视图
    //  * 而这两个函数可以被当作 ViewModel 本身
    //  */
    // connect(
    //   mapStateToProps,
    //   mapDispatchToProps,
    // )(App);
    this.setState({ inputValue: '' });
  }

  @autobind
  private updateView() {
    // 值合法，再执行
    if (!!this.state.inputValue) {
      store.dispatch({
        type: "ADD_ITEM",
        payload: {
          text: this.state.inputValue,
          uuid: v4(),
        },
      });
      localStorage.setItem('list', JSON.stringify(store.getState()));
      this.setState({ inputValue: '' });
    }
  }

  @autobind
  public keypress(e: React.KeyboardEvent) {
    return e.which === 13 ? this.updateView() : void 0;
  }

  @autobind
  public handleChange(e: any) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  @autobind
  public deleteItem(uuid: string) {
    const payloads = store.getState();
    const payload = !!payloads.find(item => item.uuid === uuid) ? (payloads.find(item => item.uuid === uuid) as Payload) : { uuid: '', text: '' };
    store.dispatch({
      type: "DELETE_ITEM",
      payload,
    });
    // TODO: DELETE THIS ROW
    this.setState({ input: this.state.inputValue });
    localStorage.setItem('list', JSON.stringify(store.getState()));
  }

  @autobind
  public getAllItems() {
    const items = Array.isArray(store.getState()) ? store.getState() : [];
    return items.map((item, index: number) => {
      return (
        (<Item handleDelete={this.deleteItem} key={index} index={index} content={item} />)
      )
    });
  }

  public render() {
    return (
      <Provider store={store}>
      <Fragment>
        <div className="App">
          <img className="image" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="logo" />
          <h4 className="red">TodoList 点击事项即可删除</h4>
          <h5>使用 localStorage 进行数据缓存</h5>
          <ul className="flex-container">
            <input type="text" value={this.state.inputValue} onKeyPress={this.keypress} onChange={this.handleChange} />
            <button className="btn btn-default" onClick={this.updateView}>添加</button>
          </ul>
          <ul> {this.getAllItems()} </ul>
        </div>
      </Fragment>
      </Provider>
    );
  }
}