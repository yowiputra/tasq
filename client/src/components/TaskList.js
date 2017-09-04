import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem, Button, Jumbotron } from 'react-bootstrap';
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

    let taskView = null;

    if(this.props.taskUserId === 0){
      taskView = (
        <Jumbotron>
          <h2>Hello, there!</h2>
          <p>Click on a user on the left or create a new one!</p>
        </Jumbotron>
      )
    } else {
      taskView = (
        <Panel header={title}>
          <ListGroup>
            {this.props.taskData.map(task =>
              <ListGroupItem onClick={() => this.props.completeTask(task.done, task.id, task.user_id)}>
                <span className="item-name-span" style={this.taskStyle(task.done)}>{task.task}</span>
                <Button bsStyle="danger" onClick={() => this.props.deleteTask(task.id, task.user_id)}>X</Button>
              </ListGroupItem>
            )}
          </ListGroup>
          <TaskInput
            postTask={this.props.postTask}
            userid={this.props.taskUserId} />
        </Panel>
      )
    }

    return(
      <div className="task-list-box">
        {taskView}
      </div>
    )
  }
}

export default TaskList;
