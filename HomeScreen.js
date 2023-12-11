//HomeScreen.js

import React, { useState } from 'react';
import { View, SafeAreaView, Text, ScrollView, TouchableOpacity, Image, TextInput, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const favoriteBlocks = [
    { id: '1', title: 'Favorite 1', image: require('./assets/icon.png') },
    { id: '4', title: 'Favorite 2', image: require('./assets/icon.png') },
    // Add more favorite blocks as needed
  ];

  const nearYouBlocks = [
    { id: '2', title: 'Near You 1', image: require('./assets/splash.png') },
    { id: '3', title: 'Near You 2', image: require('./assets/splash.png') },
    // Add more "Near You" blocks as needed
  ];

  const renderBlock = ({ item }) => (
    <TouchableOpacity style={styles.block} onPress={() => navigation.navigate('HelloWorld')}>
      <Image source={item.image} style={styles.image} />
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <TextInput
          placeholder="Search here..."
          placeholderTextColor="grey"
          style={styles.searchBar}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Text style={styles.title}>Favorites</Text>
        <FlatList
          data={favoriteBlocks}
          renderItem={renderBlock}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalList}
        />
        <Text style={styles.title}>Near You</Text>
        <FlatList
          data={nearYouBlocks}
          renderItem={renderBlock}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalList}
        />
      </ScrollView>
    </SafeAreaView>
  );
};




const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
    marginTop: 20,
  },
  horizontalList: {
    flexGrow: 0,
    paddingBottom: 20,
  },
  block: {
    width: 100,
    marginRight: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'white',
  },
  searchBar: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderColor: 'grey',
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
  },
});

export default HomeScreen;

