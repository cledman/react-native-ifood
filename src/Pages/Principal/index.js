import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, Alert, ActivityIndicator } from 'react-native';
import CategoriaItem from '../../components/CategoriaItem';
import RestaurantItem from '../../components/RestauranteItem';
import BannerItem from '../../components/BannerItem';
import { 
  SafeAreaView, 
  Image, 
  View, 
  ButtonContainer, 
  ViewRestaurants,
  RestaurantsTitle, 
  ViewPrincipal,
  CategoriaView,
  BannerView,
  SelectTipo,
  ButtonTipoSelect,
  TextTipoSelect
} from './style';
import Button from '../../components/Button';

export default function Principal() {

  const [banners, setBanner] = useState([]);
  const [categories, setCategory] = useState([]);  
  const [restaurants, setRestaurant] = useState([]);    
  const [loaded, setLoaded] = useState(false);
  const [tipo, setTipo] = useState('Entrega');  

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
        <SelectTipo>
          <ButtonTipoSelect onPress={() => setTipo('Entrega')}>
            <TextTipoSelect selected={tipo == 'Entrega'}>
               Entrega
            </TextTipoSelect>
          </ButtonTipoSelect>
          <ButtonTipoSelect onPress={() => setTipo('Retirada')}>
            <TextTipoSelect selected={tipo == 'Retirada'}>
               Retirada
            </TextTipoSelect>
          </ButtonTipoSelect>          
        </SelectTipo>
        <CategoriaView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categories.map(category => (
            <CategoriaItem key={category.id} foto={category.img_url}  texto={category.nome}/>
          ))}
        </CategoriaView>

        <BannerView horizontal={true} showsHorizontalScrollIndicator={false}>
          {banners.map(banner => (
            <BannerItem key={banner.id} foto={banner.banner_img_url}/>
          ))}
        </BannerView>        

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