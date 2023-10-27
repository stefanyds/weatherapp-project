import React from "react"
import { ActivityIndicator, View, StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import Tabs from "./src/components/Tabs"
import { useGetWeather } from "./hooks/useGetWeather"



const App = () => {
  const [loading, error, weather] = useGetWeather()

  if(weather) {
    console.log(weather)
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App