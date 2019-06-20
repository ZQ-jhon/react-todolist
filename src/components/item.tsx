import React, { Props,Component } from 'react';
import autobind from '../utils/autobind';
export default class Item extends Component<Props<any>, {}> {
    public props: any;
    @autobind
    public handleDelete() {
        this.props.handleDelete(this.props.index);
    }
    public render() {
        const {content} = this.props;
        return (
            <div className="item-container">
                <li>{content}</li>
                <button onClick={this.handleDelete}>删除</button>
            </div>
        );
    }
}