import React, { Component } from 'react';
import axios from 'axios';
import { Jumbotron } from 'react-bootstrap';
import NavBar from './NavBar'
import TaskTable from './TaskTable'

class TableView extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      tasks: [],
    }
  }

  getUserData(){
    return axios.get('/users');
  }

  getTaskData(){
    return axios.get('/tasks');
  }

  componentDidMount() {
    axios.all([this.getUserData(), this.getTaskData()])
    .then(axios.spread((userData, taskData) => {
      this.setState({
        users: userData.data,
        tasks: taskData.data
      })
    }))
  }

  render() {
    return (
      <div>
        <NavBar link="/" />
        <Jumbotron>
          <div className="container">
            <TaskTable tasks={this.state.tasks} users={this.state.users} />
          </div>
        </Jumbotron>
      </div>
    )
  }
}

export default TableView;
