import React, {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import List from './components/containers/List/List';
import AddTaskButton from './components/UI/Buttons/AddTaskButton/AddTaskButton';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import rootReduser from "../src/redux/rootReducer";

function App() {

  const store = createStore(rootReduser, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return (
    <Provider store={store}>
      <List/>
    </Provider>
  );
}

export default App;
