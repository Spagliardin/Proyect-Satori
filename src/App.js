import React, { Component } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import './App.css'




export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}
