//HomeStackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; // Make sure the path is correct
import HelloWorldScreen from './HelloWorldScreen'; // Make sure the path is correct

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="HelloWorld" component={HelloWorldScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
