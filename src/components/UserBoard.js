import React, { Component } from 'react'
import User from './User'

export default class UserBoard extends Component {

  render() {
    return (
    <div>
        <h3>User Board</h3>
        <User content="Joe" />
        <User content="Bill" />
        <User content="Alice" />
    </div>)
  }
}