import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from './ProfileScreenStyles';
import CustomCheckbox from './CustomCheckbox';

const ProfileScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameFocus = () => {
    setIsUsernameFocused(true);
  };

  const handleUsernameBlur = () => {
    setIsUsernameFocused(false);
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  const handleSignIn = () => {
    // Handle sign-in logic
    navigation.navigate('Home');
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleGoToRegister = () => {
    navigation.navigate('Register'); 
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Jobify</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={[
            styles.input,
            isUsernameFocused && styles.focusedInput,
          ]}
          placeholder="Username"
          placeholderTextColor="#000000"
          onFocus={handleUsernameFocus}
          onBlur={handleUsernameBlur}
        />
        <TextInput
          style={[
            styles.input,
            isPasswordFocused && styles.focusedInput,
          ]}
          placeholder="Password"
          placeholderTextColor="#000000"
          secureTextEntry={true}
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
        />
        {/* checkbox  forgot password */}
      <View style={styles.checkboxForgotPasswordContainer}>
        <View style={styles.checkboxContainer}>
          <CustomCheckbox checked={rememberMe} onPress={handleRememberMe} />
          <Text style={styles.checkboxText}>Remember me</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGoToRegister}>
  <Text style={styles.registerText}>
    Don't have an account?{' '}
    <Text style={{ textDecorationLine: 'underline', color: '#00ADB5' }}>Register</Text>
  </Text>
</TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
