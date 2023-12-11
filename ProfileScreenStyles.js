// ProfileScreenStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    width: '80%',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    paddingLeft: 20, 
    paddingRight: 20, 
    borderRadius: 27,
    backgroundColor: '#fff',
    color: '#000000',
    borderColor: '#cccccc',
  },
  focusedInput: {
    fontWeight: 'bold',
  },
  signInButton: {
    height: 50,
    borderRadius: 27,
    backgroundColor: '#00ADB5',
    padding: 15,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    color: '#000000',
    borderColor: '#00ADB5',
  },
  signInText: {
    color: '#cccccc',
    fontSize: 18,
    fontWeight: 'bold',

  },
  registerText: {
    marginTop: 25,
    color: '#000000',
  },
  checkboxContainer: {
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'flex-start', 
   marginTop: 10,
   alignSelf: 'flex-start', 
  },
  customCheckbox: {
    height: 24,
    width: 24,
    borderWidth: 2,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderColor: 'black',
  },
  checkedCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uncheckedCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'black',
  },
  checkmark: {
    color: 'white',
  },

  forgotPasswordText: {
    marginTop: 10,
    color: '#000000',
    alignSelf: 'flex-end', 
  },
  checkboxForgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%', 
    marginTop: 10,
  },
});

export default styles;
