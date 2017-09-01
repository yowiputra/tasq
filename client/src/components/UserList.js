import React, { Component } from 'react';
import UserInput from './UserInput'

class UserList extends Component {
  render(){
    return(
      <div className="user-list-box">
        <h1>Users</h1>
        <ul>
          {this.props.userData.map(user =>
            <li key={user.id} onClick={() => this.props.getTasks(user.id)}>
              {user.name}
            </li>
          )}
        </ul>
        <UserInput postUser={this.props.postUser}/>
      </div>
    )
  }
}

export default UserList;
