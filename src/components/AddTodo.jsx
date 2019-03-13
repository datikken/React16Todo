import React, { Component } from 'react'

export class AddTodo extends Component {

state = {
    title: ''
}

onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(e)
}

onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: ''})
}

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
        <input 
          type="text" 
          name="title" 
          placeholder="Add new Todo" 
          value={this.state.title}
          onChange={this.onChange}
          style={{flex: '10', 
          padding: '5px', 
          height: '25px'}}/>
        <input type="submit" value="Submit" className="btn" style={{flex: '1'}}/>
      </form>
    )
  }
}

export default AddTodo