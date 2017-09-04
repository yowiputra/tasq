import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import TaskInput from './TaskInput'
import '../styles/panels.css'

class TaskList extends Component {
  taskStyle(done){
    if(done){
      return {
        textDecoration: 'line-through',
        verticalAlign: '-webkit-baseline-middle'
      }
    }
  }

  render(){
    const title = (
      <h2>Tasks</h2>
    );

    return(
      <div className="task-list-box">
        <Panel header={title}>
          <ListGroup>
            {this.props.taskData.map(task =>
              <ListGroupItem key={task.id} onClick={() => this.props.completeTask(task.done, task.id, task.user_id)}>
                <span className="item-name-span" style={this.taskStyle(task.done)}>{task.task}</span>
                <Button bsStyle="danger" onClick={() => this.props.deleteTask(task.id, task.user_id)}>Delete</Button>
              </ListGroupItem>
            )}
          </ListGroup>
          <TaskInput
            postTask={this.props.postTask}
            userid={this.props.taskUserId} />
        </Panel>
      </div>
    )
  }
}

export default TaskList;
