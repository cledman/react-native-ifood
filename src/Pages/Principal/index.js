import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, Alert, ActivityIndicator } from 'react-native';
import RestaurantItem from '../../components/RestauranteItem';
import { 
  SafeAreaView, 
  Image, 
  View, 
  ButtonContainer, 
  ViewRestaurants,
  RestaurantsTitle, 
  ViewPrincipal
} from './style';

export default function Principal() {

  const [banners, setBanner] = useState([]);
  const [category, setCategory] = useState([]);  
  const [restaurants, setRestaurant] = useState([]);    
  const [loaded, setLoaded] = useState(false);

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


  const  ViewHome = (props) =>{
    return(
      <ViewPrincipal>
        <RestaurantsTitle>Restaurantes</RestaurantsTitle>
        <ViewRestaurants>
          {restaurants.map(restaurante =>(
            <RestaurantItem 
              key = {restaurante.id}
              foto = {restaurante.url_img}
              nome = {restaurante.nome}
              nota = {restaurante.nota}
              categoria = {restaurante.categoria}
              distancia = {restaurante.distancia}
              valorFrete = {restaurante.valor_frete}
              tempoEntrega = {restaurante.tempo_entrega}
            />
          ))}
        </ViewRestaurants>        
      </ViewPrincipal>
    )
  }

  return (
    <ViewPrincipal>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
          { loaded ? (
            <ViewHome />
          ) :
          (
            <View>
              <ActivityIndicator color="#F0001A" size="large" />
            </View>
          )}
      </SafeAreaView>
    </ViewPrincipal>
  );
}