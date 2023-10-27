import React, { useState, useEffect } from "react"
import { ActivityIndicator, View, StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import Tabs from "./src/components/Tabs"
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject } from 'expo-location'
import { WEATHER_API_KEY } from "@env"


const App = () => {
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState<LocationObject | null>(null)
  const [error, setError] = useState('')
  const [weather, setWeather] = useState([])
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])

  const requestLocationPermissions = async () => {
    const { status } = await requestForegroundPermissionsAsync()

    if(status == 'granted') {
      const currentPosition = await getCurrentPositionAsync()
      setLat(currentPosition.coords.latitude)
      setLon(currentPosition.coords.longitude)
    } else {
      setError('Permission was denied')
    }
  }

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`)
      const data = await res.json()
      setWeather(data)
    } catch (error) {
      setError('Could not fetch weather')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    requestLocationPermissions()
    fetchWeatherData()
  }, [lat, lon])

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