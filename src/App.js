import React, {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import List from './components/containers/List/List';
import AddTaskButton from './components/UI/Buttons/AddTaskButton/AddTaskButton';

function App() {
  return (
    <div>
      <List/>
    </div>
  );
}

export default App;
