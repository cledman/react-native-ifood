import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App(){
    return(
        <View  style={styles.container}>
            <Text>blabla</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'red',
        color: '#000',
        flex:1,
        justifyContent: 'center',
    }
})