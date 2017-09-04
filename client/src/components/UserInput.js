import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

class UserInput extends Component {
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
      if(!event.target.value){
        this.props.postUser("Anonymous");
      } else {
        this.props.postUser(this.state.input);
      }
      event.target.value = '';
      this.setState({input: ''});
    }
  }

  render(){
    const userInput = <FormControl
            type="text"
            value={this.state.input}
            placeholder="Enter name"
            onChange={this.textInputHandler}
            onKeyDown={this.enterContentHandler}
          />;

    return(
      <div className="input-box">
        {userInput}
      </div>
    )
  }
}

export default UserInput;
