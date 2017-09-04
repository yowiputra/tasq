import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './App';
import TableView from './components/TableView';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <HashRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/tableview" component={TableView} />
    </div>
  </HashRouter>
), document.getElementById('root'));

registerServiceWorker();
