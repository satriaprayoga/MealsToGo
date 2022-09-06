import React from 'react'
import { Text} from 'react-native'
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

const RestaurantCard = styled(Card)`
  background-color: ${(props)=>props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props)=>props.theme.colors.bg.primary};
  padding: ${(props)=>props.theme.space[3]}
`;

const Title =styled(Text)`
  font-family:${(props)=>props.theme.fonts.body};
  font-size:${(props)=>props.theme.fontSizes.body}
  padding: ${(props)=>props.theme.space[3]};
  color: ${(props)=>props.theme.colors.ui.primary}; 
`;

const RestaurantInfoCard = ({restaurant={}}) => {
  const {
    name="Some Restaurant",
    icon,
    photos=['https://www.foodiesfeed.com/wp-content/uploads/2020/03/close-up-of-a-juicy-beef-burger-in-a-restaurant-1024x683.jpg'],
    address="100 some street",
    isOpenNow=true,
    rating=4,
    isClosedTemporary
  }=restaurant;
  
    return (
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{uri:photos[0]}}/>
        <Title>{name}</Title>
      </RestaurantCard>
    )
}


export default RestaurantInfoCard