import React, { Component } from "react";
import "./App.css";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false //använder föratt visa button Edit
  };
  handelChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handlerSubmit = e => {
    e.preventDefault(); //refresg Inte page
    //vi vill hugga en value (text) från <input> och addera till todoList
    //skapa en ny Item och med ens properties
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    //console.log(newItem);
    //skapa en ny array
    //const uppdateItems = [...this.this.items]-> grab allt i den array-> items
    //const uppdateItems = [...this.this.items, newItem]-> addera newItem toll array
    const uppdateItems = [...this.state.items, newItem];
    this.setState({
      items: uppdateItems,
      item: "",
      id: uuid(),
      editItem: false
    });
  };
  // skapa en metod / function nueral
  clearList = () => {
    this.setState({
      items: []
    });
  };
  deleteItem = id => {
    //console.log('hello from delete Item')
    const filteItem = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteItem,
    });
  };
  editHandler = id => {
    //console.log("hello from edit handle");
    //delete item
    const filteItem = this.state.items.filter(item => item.id !== id);

    const selectItem = this.state.items.find(item => item.id === id);
    console.log(filteItem);

    this.setState({
      items: filteItem,
      item: selectItem.title,
      editItem: true,
      id:id
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handelChange={this.handelChange}
              handlerSubmit={this.handlerSubmit}
              editItem={this.state.editItem}
            />
            {/* display arrey in TodoList */}
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              deleteItem={this.deleteItem}
              editHandler={this.editHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
