import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos.jsx';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
import axios from 'axios';

class App extends Component {
  
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        this.setState({ todos: res.data })
      })
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  delTodo = (id) => {
    console.log(id)
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => todo.id !== id)
      ]
    })
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  state = {
    todos: []
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
          <Header/>
          <Route path="/" exact render={props => (
            <React.Fragment>
              <AddTodo 
                addTodo={this.addTodo}/>
              <Todos 
                todos={this.state.todos} 
                markComplete={this.markComplete}
                delTodo={this.delTodo}/>
            </React.Fragment>
          )}/>
          <Route path="/about" component={About}>
             
          </Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
