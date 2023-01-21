import { View, Text, SafeAreaView,StyleSheet} from 'react-native'
import React from 'react'
import Home from './screens/home'
import Quiz from './screens/quiz'
import Result from './screens/result'
import { NavigationContainer } from '@react-navigation/native'
import MyStack from './navigation'

const App = () => {
  return (
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
    
  )
}
const styles=StyleSheet.create({
  container:{
    marginTop:45,
    marginHorizontal:15,
  }
})

export default App