import React, { Component } from 'react'
import FullMenu from './components/FullMenu/FullMenu'
import Hamburguer from './components/Hamburguer/Hamburguer'
import Main from './components/Main/Main'
import './App.css'



export default class App extends Component {

  render() {
    return (
      <div>
        <FullMenu />
        <Hamburguer />
        <Main />
      </div>
    )
  }
}
