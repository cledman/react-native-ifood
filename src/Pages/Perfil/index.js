import { Link } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, Linking, StyleSheet } from 'react-native';
import { SafeAreaView, Image, View, ButtonContainer } from './style';


export default function Perfil() {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <View>
          <Text
          style={styles.text}
          onPress={() => {
            Linking.openURL(
              'https://github.com/cledman'
            );
          }}>
          Click to go to my Gihub Profile
        </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    marginTop: 30,
  },
})