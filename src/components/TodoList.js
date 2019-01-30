import React, { Component } from "react";
import TodoItem from "./TodoItem.js";

export default class TodoList extends Component {
  render() {
    const { items, clearList, deleteItem, editHandler} = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize  text-center">todo list</h3>
        {items.map(item => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              //arrow functon ""() =>""  reference this reference "deleteItem(item.id)"
              deleteItem={() => deleteItem(item.id)}
              editHandler={() => editHandler(item.id)}
            />
          );
        })}

        <button
          type="text"
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick={clearList}
        >
          clear list
        </button>
      </ul>
    );
  }
}
