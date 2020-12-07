import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native'


export const SafeAreaView = styled.SafeAreaView`

	align-items: center;
	flex:1;
	padding-top: 40px;

`

export const Image = styled.Image`

    margin: 40px;
    padding: 80px;
    

`
export const ViewActivity = styled.View`

	align-items: center;
	flex:1;
	justify-content:center;
	padding-top: 40px;
`

export const View = styled.View`

	align-items: center;
	flex:2;
	padding-top: 40px;
`


export const ViewPrincipal = styled.ScrollView`

	flex: 1;
	padding: 40px 0;
        
`

export const ButtonContainer = styled.View`
	align-items:center;
	flex-direction:row;
	justify-content: space-between;
	width:100%;
	padding: 0 20px 20px 20px;
`


export const CategoriaView = styled.ScrollView`
	height: 90px;        
	margin-top: 20px;
`

export const SelectTipo = styled.View`

	flex-direction:row;
	font-weight: bold;
	margin: 0 20px 10px 20px;
	text-align:left;
	width: ${(Dimensions.get('window').width)}px;

`

export const ButtonTipoSelect = styled.TouchableOpacity`

	margin-right: 20px;
        
`

export const TextTipoSelect = styled.Text`

	${props => props.selected ? css`
			color: #F0001A;
			font-weight: bold;
	` : css``}

`

export const BannerView = styled.ScrollView`
	flex-direction: row;
	height: 180px;
	margin-top: 20px;
	width: ${(Dimensions.get('window').width) - 10}px;
`

export const ViewRestaurants = styled.View`

	justify-content: center;
	margin: 10px 20px 30px 20px ;
	width: ${(Dimensions.get('window').width) - 50}px;
        
`

export const RestaurantsTitle = styled.Text`
	font-weight: bold;
	margin:40px 20px 10px 20px;
	text-align:left;
	width: ${(Dimensions.get('window').width)}px;

`