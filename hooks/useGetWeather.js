import { useState, useEffect } from "react"
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import { WEATHER_API_KEY } from "@env"

export const useGetWeather = () => {
    const [loading, setLoading] = useState(true)
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
        const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
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
    return[loading, error, weather]
}