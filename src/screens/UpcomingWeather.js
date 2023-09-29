import React from "react"
import { SafeAreaView, StyleSheet, Text, FlatList, StatusBar, ImageBackground } from "react-native"
import ListItem from "../components/ListItem"

const DATA = [
    {
        dt_txt: "2023-09-29 13:57:00",
        main: {
            temp_max: 22,
            temp_min: 19
        },
        weather: [
            {
                main: 'Clear'
            }
        ]
    },
    {
        dt_txt: "2023-09-29 14:57:00",
        main: {
            temp_max: 23,
            temp_min: 18
        },
        weather: [
            {
                main: 'Clouds'
            }
        ]
    },
    {
        dt_txt: "2023-09-29 15:57:00",
        main: {
            temp_max: 25,
            temp_min: 17
        },
        weather: [
            {
                main: 'Rain'
            }
        ]
    }
]

const UpcomingWeather = () => {
    const renderItem = ({item}) => (
        <ListItem
        condition={item.weather[0].main} 
        dt_txt={item.dt_txt} 
        min={item.main.temp_min} 
        max={item.main.temp_max}
        />
    )
    const {container, image} = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground 
            source={require('../../assets/upcoming-background.jpg')} 
            style={image}
            >
                <Text>Upcoming Weather</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    image: {
        flex: 1
    }
})
export default UpcomingWeather