import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux/store';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './App';
import * as serviceWorker from './serviceWorker';

const store = configureStore();
const App = () => (
   <Provider store={store}>
      <Main />
   </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
