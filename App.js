import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { SwitchNavigator, StackNavigator } from 'react-navigation'

// import the different screens
import Loading from './src/containers/Loading'
import SignUp from './src/containers/SignUp'
import Login from './src/containers/Login'
import Home from './src/containers/Home'
import MentionsLegales from './src/containers/MentionsLegales'
import Settings from './src/containers/Settings'
import ChatContainer from './src/containers/ChatContainer'
import MyTickets from './src/containers/MyTickets'

// configurer les routes avec React Native est un peu différent de React
// J'ai donc suivi la documentation de React Navigation qui fournis un exemple pour native
// https://reactnavigation.org/docs/auth-flow.html

const AppStack = StackNavigator(
  {
    Home: Home,
    MentionsLegales: MentionsLegales,
    Settings: Settings,
    ChatContainer: ChatContainer,
    MyTickets: MyTickets
  },
  {
    headerMode: 'none',
  }
)
const AuthStack = StackNavigator(
  { Login: Login, SignUp: SignUp },
  {
    headerMode: 'none',
  }
)

export default (App = SwitchNavigator(
  {
    Loading: Loading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Loading',
  }
))
