import React, { Component } from 'react';

class TaskInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: ''
    }
    this.textInputHandler = this.textInputHandler.bind(this);
    this.enterContentHandler = this.enterContentHandler.bind(this);
  }

  textInputHandler(event){
    this.setState({
      input: event.target.value
    })
  }

  enterContentHandler(event){
    if (event.key === 'Enter'){
      if(event.target.value){
        this.props.postTask(this.state.input, this.props.userid);
      }
      event.target.value = '';
      this.setState({input: ''});
    }
  }

  render(){
    const taskInput = <input
      onChange={this.textInputHandler}
      onKeyDown={this.enterContentHandler}/>;

    return(
      <div className="task-input-box">
        {taskInput}
      </div>
    )
  }
}

export default TaskInput;
