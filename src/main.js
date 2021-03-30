import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import UsersComponent from './components/UsersComponent';
import {loadUsers} from './actions/userActions';

const store = configureStore();
store.dispatch(loadUsers()); // this is async

ReactDOM.render(
  <Provider store={store}>
    <UsersComponent/>
  </Provider>, document.getElementById('mycontainer'));
