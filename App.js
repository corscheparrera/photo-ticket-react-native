import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { SwitchNavigator } from 'react-navigation'

// import the different screens
import Loading from './src/containers/Loading'
import SignUp from './src/containers/SignUp'
import Login from './src/containers/Login'
import Home from './src/containers/Home'
import MentionsLegales from './src/containers/MentionsLegales'
import Settings from './src/containers/Settings'
import CameraView from './src/containers/CameraView'

// create our app's navigation stack
// source https://medium.com/react-native-training/react-native-firebase-authentication-7652e1d2c8a2
const App = SwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Home,
    MentionsLegales,
    Settings,
    CameraView,
  },
  {
    initialRouteName: 'Loading',
  }
)

export default App
