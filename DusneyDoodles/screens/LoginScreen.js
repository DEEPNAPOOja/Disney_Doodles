import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import InputField from '../components/InputField';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    let isValid = true;

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate password
    if (!password) {
      setPasswordError('Password is required.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleLogin = () => {
    if (validateForm()) {
      // Validate login credentials here
      if (email === 'poojathmideepna@gmail.com' && password === 'Pooja@123') {
        // Navigate to HomePage on successful login
        navigation.navigate('Home');
      } else {
        setEmailError('Invalid email or password.');
        setPasswordError('Invalid email or password.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Disney Doodles</Text>

      <InputField
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        style={emailError ? styles.inputError : {}}
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <InputField
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={passwordError ? styles.inputError : {}}
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
        style={styles.link}
      >
        <Text style={styles.linkText}>Don't have an account? Register here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#FFF8E7', 
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF0000', // Mickey Red for the title
    textAlign: 'center',
    marginBottom: 30,
  },
  inputError: {
    borderColor: '#FF0000', // Mickey Red for input error border
    borderWidth: 1,
  },
  errorText: {
    color: '#FF0000', 
    fontSize: 12,
    marginTop: 1,
    textAlign: 'left',
  },
  button: {
    backgroundColor: '#FFD700', // Golden Yellow for buttons
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000000', // Black for shadow
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#000000', // Black for button text
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {
    color: '#FF0000', 
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});


export default LoginScreen;
