import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import InputField from '../components/InputField';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    let isValid = true;

    // Validate name
    if (!name) {
      setNameError('Name is required.');
      isValid = false;
    } else {
      setNameError('');
    }

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
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleRegister = () => {
    if (validateForm()) {
      // registration logic here
      console.log(name, email, password);
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <InputField
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={nameError ? styles.inputError : {}}
      />
      {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}

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

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.link}
      >
        <Text style={styles.linkText}>Already have an account? Login here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#FFF8E7', // Cream White for background
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF0000', // Mickey Red for title
    textAlign: 'center',
    marginBottom: 30,
    textShadowColor: '#000000', // Subtle shadow
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  button: {
    backgroundColor: '#FFD700', // Golden Yellow for buttons
    padding: 15,
    borderRadius: 15, // Rounded corners
    alignItems: 'center',
    marginTop: 15,
    shadowColor: '#000000', // Black shadow for depth
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // For Android shadow
  },
  buttonText: {
    color: '#000000', // Black text for contrast
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 25,
    alignItems: 'center',
  },
  linkText: {
    color: '#FF0000', // Mickey Red for link text
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  inputError: {
    borderColor: '#FF0000', // Mickey Red for error input border
    borderWidth: 1.5,
    borderRadius: 8,
    marginTop: 5,
  },
  errorText: {
    color: '#FF0000', // Mickey Red for error messages
    fontSize: 12,
    marginTop: 3,
    textAlign: 'left',
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputField: {
    backgroundColor: '#FFF8E7', // Matching background
    borderColor: '#FFD700', // Golden Yellow for normal state
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginTop: 5,
  },
});

export default RegisterScreen;


