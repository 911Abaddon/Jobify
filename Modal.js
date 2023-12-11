import React from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Modal = ({ children }) => {
  return (
    <View style={styles.modal}>
      {children}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.closeButton}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const RegisterStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="PhoneNumberScreen">
      <Stack.Screen name="PhoneNumberScreen" component={PhoneNumberScreen} />
      <Stack.Screen name="NameScreen" component={NameScreen} />
      <Stack.Screen name="EmailScreen" component={EmailScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    padding: 10,
    width: '80%',
  },
  button: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00ADB5',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  modal: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RegisterStack;
