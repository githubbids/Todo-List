import React, { Component } from 'react';

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newItem:"",
      list: []
    }
  }
// on change logic
  onChageHandler = (e) => {
    this.setState({
       newItem : e.target.value
    });
  }
// Add Item logic
  addItem(){
    const newItem={
      id: 1 + Math.random(),
    value: this.state.newItem.slice()
    };
    //current copy 
    const list = [...this.state.list];
    // add new item to list
    list.push(newItem);
    //update state with new list and reset new item 
    this.setState({
      list,
      newItem:""
    });
  }
 
  render() {
    return (
      <div className="App">
        <h2>Todo List Application</h2>
        <hr />
        <input 
          type="text"
          placeholder="Type todo list "
          value={this.state.newItem}
          onChange={this.onChageHandler}
        />
        <button 
          onClick={() => this.addItem()}
        >submit</button>
        <br />
        <ul> 
        {this.state.list.map(item =>{
          return (
            <li key={item.id}>
            <input type="checkbox"  />
              {item.value} 
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}

export default App;
