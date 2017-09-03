import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
    };
    this.getTasks = this.getTasks.bind(this);
    this.postUser = this.postUser.bind(this);
    this.postTask = this.postTask.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  setUsers(users){
    this.setState({
      users: users
    })
  }

  setTasks(data, userid){
    this.setState({
      tasks: data,
      taskUserId: userid
    })
  }

  getTasks(userid) {
    axios.get(`/usertasks/${userid}`)
    .then(({data}) => this.setTasks(data, userid));
  }

  postUser(username){
    axios.post('/adduser', {name: username})
    .then(({data}) => {
      this.state.users.push(data);
      this.setUsers(this.state.users);
    })
  }

  postTask(task, userid){
    axios.post(`/addtask/${userid}`, {task: task})
    .then(({data}) => {
      this.state.tasks.push(data);
      this.setTasks(this.state.tasks, userid);
    })
  }

  deleteUser(userid){
    axios.post('/deleteuser',{id: userid})
    .then(({data}) => this.setUsers(data))
  }

  completeTask(done, taskid, userid){
    axios.post('/completetask', {
      bool: !done,
      id: taskid,
      userid: userid
    })
    .then(({data}) => this.setTasks(data, userid))
  }

  deleteTask(taskid, userid){
    axios.post('/deletetask', {
      id: taskid,
      userid: userid
    })
    .then(({data}) => this.setTasks(data, userid))
  }

  componentDidMount() {
    axios.get('/users')
    .then(({data}) => this.setUsers(data));
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Link to="/tableview">Switch Views</Link>
          <UserList
            userData={this.state.users}
            taskUserId={this.state.taskUserId}
            getTasks={this.getTasks}
            postUser={this.postUser}
            deleteUser={this.deleteUser} />
          <TaskList
            taskData={this.state.tasks}
            taskUserId={this.state.taskUserId}
            postTask={this.postTask}
            completeTask={this.completeTask}
            deleteTask={this.deleteTask} />
        </div>
      </div>
    );
  }
}

export default App;
