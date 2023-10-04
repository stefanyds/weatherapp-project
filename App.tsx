import React from "react"
import UpcomingWeather from "./src/screens/UpcomingWeather"
import City from "./src/screens/City"
import CurrentWeather from "./src/screens/CurrentWeather"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator() //initialize the tab object

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={'Current'} component={CurrentWeather}/>
        <Tab.Screen name={'Upcoming'} component={UpcomingWeather} />
        <Tab.Screen name={'City'} component={City} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default App