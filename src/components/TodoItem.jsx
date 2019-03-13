import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      padding: '0 20px 0 20px',
      width: '650px'
    }
  }

  render() {
    const { id, title } = this.props.todo 

    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '}{title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
        background: '#FF0000',
        color: 'white',
        border: 'none',
        padding: '5px 8px',
        borderRadius: '50%',
        cursor: 'pointer',
        margin: '0 0 0 20px',
        float: 'right'
}

export default TodoItem;