import React from 'react';
import './App.css';
import AddToDo from "./Component/AddToDo";
import {Provider} from "react-redux";
import store from './Redux/Store';
import ToDoList from "./Component/ToDoList";

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <header className="App-header">
                  <AddToDo/>
                  <ToDoList/>
              </header>
          </div>
      </Provider>

  );
}

export default App;
