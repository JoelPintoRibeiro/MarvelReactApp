import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.item = this.props.item
        this.index = this.props.index

    }
    render() {
        return (
        

                  <li key={this.index}>{this.item} <button className="destroy" onClick={this.props.onRemoveItem} >Supprimer tache</button> </li>

        )
    }
}

export default TodoList;