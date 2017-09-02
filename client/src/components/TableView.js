import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TableView extends Component {
  render() {
    return (
      <div>
        <Link to="/">Switch Views</Link>
        <h1>Table View</h1>
      </div>
    )
  }
}

export default TableView;
