import React, { Component } from 'react';
import TaskInput from './TaskInput'

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
      <div className="task-list-box">
        <h1>Tasks</h1>
        <ul>
          {this.props.taskData.map(task =>
            <li className="task-item" key={task.id} style={this.taskStyle(task.done)}>
              <span onClick={() => this.props.completeTask(task.done, task.id, task.user_id)}>{task.task}</span>
              <button onClick={() => this.props.deleteTask(task.id, task.user_id)}>Delete</button>
            </li>
          )}
        </ul>
        <TaskInput
          postTask={this.props.postTask}
          userid={this.props.taskUserId} />
      </div>
    )
  }
}

export default TaskList;
