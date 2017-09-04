import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import '../styles/tasktable.css'
import find from 'lodash/find';

class TaskTable extends Component {
  getUserName(userid){
    const userObj = find(this.props.users, ['id', userid]);
    return userObj.name;
  }

  taskStyle(done){
    if(done){
      return {
        textDecoration: 'line-through'
      }
    }
  }

  render() {
    return (
      <div className="task-table">
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Users</th>
              <th>Tasks</th>
            </tr>
          </thead>
          <tbody>
            {this.props.tasks.map(task =>
              <tr key={task.id}>
                <td>
                  {this.getUserName(task.user_id)}
                </td>
                <td style={this.taskStyle(task.done)}>
                  {task.task}
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default TaskTable;
