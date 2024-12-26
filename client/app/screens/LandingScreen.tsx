import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LandingScreen() {
  return (
    <View style={styles.landing}>
      <View>
        <Text style={styles.title}>Rippl.</Text>
        <Text style={styles.subtitle}>Where small connections make big waves.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  landing: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    color: '#666666'
  }
});