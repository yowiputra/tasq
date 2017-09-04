import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import UserInput from './UserInput'
import '../styles/panels.css'

class UserList extends Component {
  userStyle(taskUserId){
    if(taskUserId === this.props.taskUserId){
      return "info";
    }
  }

  render(){
    const title = (
      <h2>Users</h2>
    );

    return(
      <div className="user-list-box">
        <Panel header={title}>
          <ListGroup>
            {this.props.userData.map(user =>
              <ListGroupItem key={user.id} onClick={() => this.props.getTasks(user.id)} bsStyle={this.userStyle(user.id)}>
                <span className="item-name-span">{user.name}</span>
                <Button bsStyle="danger" onClick={() => this.props.deleteUser(user.id)}>Delete</Button>
              </ListGroupItem>
            )}
          </ListGroup>
          <UserInput postUser={this.props.postUser}/>
        </Panel>
      </div>
    )
  }
}

export default UserList;
