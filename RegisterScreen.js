import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import HomeScreen from './HomeScreen';


const Stack = createStackNavigator();

const EmailScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleContinue = () => {
    navigation.navigate('PhoneNumberScreen', { email, password });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.additionalHeaderText}>Please enter your  {'\n'}
       email and password </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>Please enter your email and password 
        {'\n'} to verify your account</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const PhoneNumberScreen = ({ navigation, route }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleContinue = () => {
    navigation.navigate('NameScreen', { ...route.params, phoneNumber });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.additionalHeaderText}>Please enter your
       {'\n'}Phone Number </Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const NameScreen = ({ navigation, route }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleContinue = () => {
    navigation.navigate('BirthdayScreen', { ...route.params, name, lastName });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.additionalHeaderText}>Please enter your
       {'\n'}Firstname and Last Name  </Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={(text) => setLastName(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};


const BirthdayScreen = ({ navigation, route }) => {
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [formattedDate, setFormattedDate] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (pickedDate) => {
    setDate(pickedDate);
    setFormattedDate(pickedDate.toLocaleDateString());
    hideDatePicker();
  };

  const handleSignUp = () => {
    const userData = {
      email: route.params.email,
      password: route.params.password,
      phoneNumber: route.params.phoneNumber,
      name: route.params.name,
      lastName: route.params.lastName,
      birthday: date.toISOString(),
    };

    // Change the ip with your local device ip
    fetch('http://172.20.10.6:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Registration Success:', data);
        navigation.navigate('HomeScreen'); 
      })
      .catch((error) => {
        console.error('Registration Error:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.additionalHeaderText}>Please enter your birthday</Text>

      <TouchableOpacity style={styles.dateContainer} onPress={showDatePicker}>
        <TextInput
          style={styles.dateText}
          placeholder="Select Date"
          value={formattedDate}
          editable={false}
        />
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};




const RegisterStack = () => {
  return (
    <Stack.Navigator initialRouteName="EmailScreen">
      <Stack.Screen
        name="EmailScreen"
        component={EmailScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PhoneNumberScreen"
        component={PhoneNumberScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NameScreen"
        component={NameScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BirthdayScreen"
        component={BirthdayScreen}
        options={{
          headerShown: false,
        }}
      />
     
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

  descriptionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: 13,
    color: '#ADC4CE',
    textAlign: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  additionalHeaderText: {
    fontSize: 25,
    fontWeight: 'bold',
    position: 'absolute', // Position the text absolutely
    top: 0,               // Align to the top
    left: 30,              // Align to the left
    marginTop: 20,        // Add top margin for spacing
    textAlign: 'left',
    color: '#333',
    marginBottom: 10,
  },
  dateContainer: {
    backgroundColor: '#0000',
    padding: 25,
    borderRadius: 10,
    borderColor: 'black',
    borderBottomWidth: 1, 
    marginBottom: 10,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default RegisterStack;
