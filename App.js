import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Router, Scene, Stack } from 'react-native-router-flux'
import Home from './src/components/home'
import DetailsPage from './src/components/detailsPage'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Stack>
          <Scene key="home" component={Home} intial hideNavBar />
          <Scene key="details" component={DetailsPage} hideNavBar />
        </Stack>
      </Router>
    )
  }
}