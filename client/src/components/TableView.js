import React, { Component } from 'react';
import axios from 'axios';
import 'react-bootstrap';
import orderBy from 'lodash/orderBy';
import '../styles/app.css';
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
        tasks: orderBy(taskData.data, ['created_at'], ['asc'])
      })
    }))
  }

  render() {
    return (
      <div>
        <NavBar link="/" />
        <div className="container">
          <div className="list-holder">
            <TaskTable tasks={this.state.tasks} users={this.state.users} />
          </div>
        </div>
      </div>
    )
  }
}

export default TableView;
