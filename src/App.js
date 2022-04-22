import "./App.css";
import React from "react";
import deleteLogo from "./imgs/trash.png";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      myList: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ userInput: event.target.value });
  }

  handleSubmit() {
    const newList = [...this.state.myList, this.state.userInput];
    this.setState({
      myList: newList,
      userInput: "",
    });
  }

  deleteTask(deletedItem) {
    const newList = this.state.myList.filter((item) => {
      return item !== deletedItem;
    });
    this.setState({
      myList: newList,
    });
  }

  render() {
    const tasks = this.state.myList.map((task) => (
      <div className="task" key={Math.random(Math.floor() * 10)}>
        <li className="unchecked">{task}</li>
        <div className="icons">
          <img
            src={deleteLogo}
            alt="not Found"
            className="delete"
            onClick={this.deleteTask.bind(this, task)}
          ></img>
        </div>
      </div>
    ));
    return (
      <div className="toDo">
        <input
          className="textBox"
          placeholder="To Do ..."
          type="text"
          onChange={this.handleChange}
          value={this.state.userInput}
        />
        <button onClick={this.handleSubmit} className="submitBtn">
          +
        </button>
        <h2 className="header">My To Do List</h2>
        <div className="tasks">
          <ul>{tasks}</ul>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}

export default App;
