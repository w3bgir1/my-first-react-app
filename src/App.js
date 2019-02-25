import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Title from './components/Title'
import LightSwitch from './components/LightSwitch'
import User from './components/User'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Codaisseur</h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <main>
          <Title content="Some Simple Title" />
          <LightSwitch />
          <User content="Joe" />
          <User content="Bill" />
        </main>
      </div>
    )
  }
}

export default App
