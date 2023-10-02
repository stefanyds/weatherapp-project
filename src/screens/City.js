import React from "react"
import { SafeAreaView, Text, ImageBackground, StyleSheet, StatusBar } from "react-native"

const City = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground 
            source={require('../../assets/city-background.jpg')} 
            style={styles.imageLayout}>
                <Text style={[styles.cityName, styles.cityText]}>Chicago</Text>
                <Text style={[styles.countryName, styles.cityText]}>USA</Text>
                <Text></Text>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    imageLayout: {
        flex: 1
    },
    cityName: {
        fontSize: 40
    },
    countryName: {
        fontSize: 30
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'black'        
    }
})

export default City