import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Header from './components/Header'
import Rectangle from './components/Rectangle'
import MainRectangle from './components/MainRectangle'

export class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        {/* <MainRectangle/> */}
        <Header/>
        <Rectangle/>
      </View>
    )
  }
}

export default App
