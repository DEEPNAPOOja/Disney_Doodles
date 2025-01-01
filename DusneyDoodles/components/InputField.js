import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const InputField = ({ label, placeholder, value, onChangeText, secureTextEntry = false }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#FF0000" // Mickey Red for placeholder text
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  label: {
    fontSize: 18,
    color: '#FF0000', // Mickey Red for the label
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    height: 50,
    borderColor: '#FF0000', // Mickey Red for the input border
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#FFF8E7', // Cream White background
    color: '#000000', // Black text color
    fontFamily: 'Roboto',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  inputFocus: {
    borderColor: '#FFD700', // Golden Yellow on focus
  },
});

export default InputField;
