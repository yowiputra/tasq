import React, { Component } from 'react';
import UserInput from './UserInput'

class UserList extends Component {
  userStyle(taskUserId){
    if(taskUserId === this.props.taskUserId){
      return {
        fontWeight: 'bold',
        textDecorationLine: "underline"
      }
    }
  }

  render(){
    return(
      <div className="user-list-box">
        <h1>Users</h1>
        <ul>
          {this.props.userData.map(user =>
            <li className="user-item" key={user.id}>
              <span onClick={() => this.props.getTasks(user.id)}
                    style={this.userStyle(user.id)}>{user.name}</span>
              <button onClick={() => this.props.deleteUser(user.id)}>Delete</button>
            </li>
          )}
        </ul>
        <UserInput postUser={this.props.postUser}/>
      </div>
    )
  }
}

export default UserList;
