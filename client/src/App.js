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
      tasks: [],
      taskUserId: 0
    }
    this.getTasks = this.getTasks.bind(this);
    this.postUser = this.postUser.bind(this);
    this.postTask = this.postTask.bind(this);
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
      tasks: data,
      taskUserId: userid
    }));
  }

  postUser(username){
    axios.post('/adduser', {name: username})
    .then(({data}) => {
      this.state.users.push(data);
      this.setState({
        users: this.state.users
      })
    })
  }

  postTask(task, userid){
    axios.post(`/addtask/${userid}`, {task: task})
    .then(({data}) => {
      this.state.tasks.push(data);
      this.setState({
        tasks: this.state.tasks,
        taskUserId: userid
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <UserList
            userData={this.state.users}
            getTasks={this.getTasks}
            postUser={this.postUser} />
          <TaskList
            taskData={this.state.tasks}
            taskUserId={this.state.taskUserId}
            postTask={this.postTask} />
        </div>
      </div>
    );
  }
}

export default App;
