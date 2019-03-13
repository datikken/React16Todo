import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
      <Link style={linkStyle} to="/">Home</Link> {' '}|{' '}
      <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
  background: 'black',
  color: 'white',
  textAlign: 'center',
  padding: '10px',
  height: '90px'
}

const linkStyle = {
  color: 'white'
}