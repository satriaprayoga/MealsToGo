import React from 'react'
import { Text, View } from 'react-native'

const RestaurantInfo = ({restaurant}) => {
  const {
    name='Some Restaurant',
    icon,
    photos,
    address,
    openingHours,
    rating,
    isClosedTemporary
  }=restaurant;
  
    return (
    <View>
        <Text>RestaurantInfo</Text>
    </View>
  )
}

export default RestaurantInfo