import React, { Component } from 'react';
import './styles/App.css';
import UserList from './components/UserList'
import TaskList from './components/TaskList'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      tasks: []
    }
    this.getTasks = this.getTasks.bind(this);
  }

  componentDidMount() {
    fetch('/users')
    .then(res => res.json())
    .then(users => this.setState({ users }));
  }

  getTasks(userid) {
    fetch(`/usertasks/${userid}/tasks`)
    .then(res => res.json())
    .then(tasks => this.setState({ tasks }));
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <UserList userData={this.state.users} getTasks={this.getTasks} />
          <TaskList taskData={this.state.tasks} getTasks={this.getTasks} />
        </div>
      </div>
    );
  }
}

export default App;
