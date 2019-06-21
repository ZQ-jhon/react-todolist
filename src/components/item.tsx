import React, { Props, Component } from 'react';
import autobind from '../utils/autobind';
export default class Item extends Component<Props<any>, {}> {
    public props: any;
    @autobind
    public handleDelete() {
        this.props.handleDelete(this.props.index);
    }
    public render() {
        const { content } = this.props;
        return (
            <div className="item-container">
                <li>
                    <span className="item-title">[第 {this.props.index} 项]:</span>
                    <span className="item-content">{content}</span>
                </li>
                <li>
                    <button onClick={this.handleDelete} className="btn btn-danger">删除</button>
                </li>
            </div>
        );
    }
}