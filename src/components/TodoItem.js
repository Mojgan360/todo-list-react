import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    const{title, deleteItem, editHandler} = this.props;
    return (
     <li className="group-item text-capatilize   d-flex  justify-content-between my-2">
    <h6>{title}</h6>
    <div className="todo-icon">
   <span 
    className="mx-2 text-success"
    onClick={editHandler} >
   <i className="fas fa-pen"></i>
   </span>
   <span 
   className="mx-2 text-danger"
   onClick={deleteItem} >
   
   <i className="fas fa-trash"></i>
   </span>
    </div>
     </li>
    )
  }
}
