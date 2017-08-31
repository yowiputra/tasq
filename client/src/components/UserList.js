import React, { Component } from 'react';

class UserList extends Component {
  render(){
    return(
      <div className="userListBox">
        <h1>Users</h1>
        <ul>
          {this.props.userData.map(user =>
            <li key={user.id} onClick={() => this.props.getTasks(user.id)}>
              {user.name}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default UserList;
