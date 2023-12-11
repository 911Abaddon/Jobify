import React from 'react';
import { Image, View, Text, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from './ChatScreen';
import ProfileScreen from './ProfileScreen';
import RegisterScreen from './RegisterScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons'; 
import SearchScreen from './SearchScreen';
import HomeScreen from './HomeScreen';



const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

const IconWithLabel = ({ label, imageSourceFocused, imageSourceUnfocused, focused }) => (
  <View style={{ alignItems: 'center', marginTop: 18 }}>
    <View>
      <Image
        source={focused ? imageSourceFocused : imageSourceUnfocused}
        style={{ width: 25, height: 25 }}
      />
    </View>
    <Text style={{ marginTop: 5, color: focused ? 'black' : '#393e46' }}>{label}</Text>
  </View>
);

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: { justifyContent: 'center', alignItems: 'center' },
      tabBarLabelStyle: { display: 'none' }, // Hide the tab bar labels
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <IconWithLabel 
            label="Home" 
            imageSourceFocused={require('./assets/NavigatorIcons/home.png')}
            imageSourceUnfocused={require('./assets/NavigatorIcons/home(1).png')} 
            focused={focused} 
          />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <IconWithLabel 
            label="Search" 
            imageSourceFocused={require('./assets/NavigatorIcons/search.png')}
            imageSourceUnfocused={require('./assets/NavigatorIcons/search(1).png')} 
            focused={focused} 
          />
        ),
      }}
    />
    <Tab.Screen
      name="Chat"
      component={ChatScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <IconWithLabel 
            label="Chat" 
            imageSourceFocused={require('./assets/NavigatorIcons/chat.png')}
            imageSourceUnfocused={require('./assets/NavigatorIcons/chat(2).png')} 
            focused={focused} 
          />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <IconWithLabel 
            label="Profile" 
            imageSourceFocused={require('./assets/NavigatorIcons/user(2).png')}
            imageSourceUnfocused={require('./assets/NavigatorIcons/user.png')} 
            focused={focused} 
          />
        ),
      }}
    />
  </Tab.Navigator>
);


const RootStackScreen = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="MainTabs" component={MainTabs} />
      <RootStack.Screen 
        name="Register" 
        component={RegisterScreen} 
        options={({ navigation }) => ({ 
          presentation: 'modal',
          gestureEnabled: true,
          headerShown: true,
          headerTitle: 'Register',
          headerBackTitle: '',
          headerBackTitleVisible: false,
          headerTintColor: '#000',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 15 }}>
              <Ionicons name="chevron-down-outline" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
    </RootStack.Navigator>
  );
};
const DummyScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Dummy Screen</Text>
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === 'android' ? 25 : 0 }}>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
