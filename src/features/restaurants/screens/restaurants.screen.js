import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfo from '../components/RestaurantInfo';

const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={{flex:1, marginTop:StatusBar.currentHeight}}>
      <View style={styles.search}>
        <Searchbar/>
      </View>
      <View style={styles.list}>
        <RestaurantInfo/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    search:{
      padding:16
    },
    list:{
      flex: 1,
      padding: 16,
      backgroundColor:'blue'
    }
  });

export default RestaurantsScreen;