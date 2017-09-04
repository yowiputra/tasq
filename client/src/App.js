import React, { Component } from 'react';
import axios from 'axios';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import orderBy from 'lodash/orderBy';
import NavBar from './components/NavBar'
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
      tasks: orderBy(data, ['created_at'], ['asc']),
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
        <NavBar link="/tableview" />
        <Jumbotron>
          <div className="container">
            <Grid>
              <Row className="show-grid">
                <Col xs={6} md={4}>
                  <UserList
                    userData={this.state.users}
                    taskUserId={this.state.taskUserId}
                    getTasks={this.getTasks}
                    postUser={this.postUser}
                    deleteUser={this.deleteUser} />
                </Col>
                <Col xs={12} md={8}>
                  <TaskList
                    taskData={this.state.tasks}
                    taskUserId={this.state.taskUserId}
                    postTask={this.postTask}
                    completeTask={this.completeTask}
                    deleteTask={this.deleteTask} />
                </Col>
              </Row>
            </Grid>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
