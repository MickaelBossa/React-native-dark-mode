import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  // State
  const [darkMode, setDarkMode] = useState(false);

  // Fonctions
  const toggleState = () => {
    setDarkMode(!darkMode);
  };

  return (
    <View style={darkMode ? styles.darkContainer : styles.lightContainer}>
      {darkMode ? (
        <Image
          source={require('./assets/moon.png')}
          style={{ width: 200, height: 200, marginBottom: 30 }}
        />
      ) : (
        <Image
          source={require('./assets/sun.png')}
          style={{ width: 200, height: 200, marginBottom: 30 }}
        />
      )}
      <Button
        onPress={toggleState}
        title={darkMode ? 'Passer en mode jour' : 'Passer en mode nuit'}
      />

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
