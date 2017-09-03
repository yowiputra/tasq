import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TaskTable from './TaskTable.js'

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
        <Link to="/">Switch Views</Link>
        <TaskTable tasks={this.state.tasks} users={this.state.users} />
      </div>
    )
  }
}

export default TableView;
