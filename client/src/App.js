import React, { Component } from 'react';
import axios from 'axios';
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
    axios.get('/users')
    .then(({data}) => this.setState({
      users: data
    }));
  }

  getTasks(userid) {
    axios.get(`/usertasks/${userid}`)
    .then(({data}) => this.setState({
      tasks: data
    }));
  }

  postUser(username){
    axios.post('/adduser', {username})
    .then(({data}) => {
      this.state.users.push(data);
      this.setState({
        users: this.state.users
      })
    })
  }

  postTask(task, userid){
    axios.post(`/addtask/${userid}`, {task})
    .then(({data}) => {
      this.state.tasks.push(data);
      this.setState({
        tasks: this.state.tasks
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="user-container">
            <UserList userData={this.state.users} getTasks={this.getTasks} />
          </div>
          <div className="task-container">
            <TaskList taskData={this.state.tasks} getTasks={this.getTasks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
