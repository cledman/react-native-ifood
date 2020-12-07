import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, Alert, ActivityIndicator } from 'react-native';
import { SafeAreaView, Image, View, ButtonContainer } from './style';

export default function Perfil() {

  const {banners, setBanner} = useState([]);
  const {category, setCategory} = useState([]);  
  const {restaurant, setRestaurant} = useState([]);    
  const {loaded, setLoaded} = useState(false);

  useEffect( () =>{

    async function searchData(){
      try{
        const response = await fetch('http://my-json-server.typicode.com/pablohdev/app-ifood-clone/db');
        const data = await response.json();
        setLoaded(true);
        setBanner(data.banner_principal);
        setCategory(data.categorias);
        setRestaurant(data.restaurantes);                

      }catch(e){
        Alert.alert('Error on search: '+ e);
      }
    }

    searchData();
  },[]);

  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <View>
          <Text>Perfil</Text>
        </View>
      </SafeAreaView>
    </>
  );
}