import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigation from './screens/loginSignupScreens/AuthNavigation'

const RootNavigation = () => {
  return (
   <NavigationContainer>
       <AuthNavigation />
   </NavigationContainer>
  )
}

export default RootNavigation

const styles = StyleSheet.create({})