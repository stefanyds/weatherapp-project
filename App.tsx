import React, { useState, useEffect } from "react"
import { ActivityIndicator, View, StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import Tabs from "./src/components/Tabs"
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject } from 'expo-location'



const App = () => {
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState<LocationObject | null>(null)
  const [error, setError] = useState('')

  const requestLocationPermissions = async () => {
    const { status } = await requestForegroundPermissionsAsync()

    if(status == 'granted') {
      const currentPosition = await getCurrentPositionAsync()
      setLocation(currentPosition)
    } else {
      setError('Permission was denied')
    }
  }

  useEffect(() => {
    requestLocationPermissions()
  }, [])

  if(location) {
    console.log(location)
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