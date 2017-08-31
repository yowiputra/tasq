import React, { Component } from 'react';

class TaskList extends Component {
  taskStyle(done){
    if(done){
      return {
        textDecoration: 'line-through'
      }
    }
  }

  render(){
    return(
      <div className="taskListBox">
        <h1>Tasks</h1>
        <ul>
          {this.props.taskData.map(task =>
            <li key={task.id} style={this.taskStyle(task.done)}>
              {task.task}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default TaskList;
