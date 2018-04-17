import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { SwitchNavigator } from 'react-navigation'

// import the different screens
import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
import Main from './Main'
import InfoPage from './InfoPage'
import MentionsLegales from './MentionsLegales'
import Settings from './Settings'
import Header from './Header'

// create our app's navigation stack
// source https://medium.com/react-native-training/react-native-firebase-authentication-7652e1d2c8a2
const App = SwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main,
    InfoPage,
    MentionsLegales,
    Settings,
    Header,
  },
  {
    initialRouteName: 'Loading',
  }
)

export default App
