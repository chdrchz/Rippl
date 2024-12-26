import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function LandingScreen() {
  return (
    <View style={styles.landing}>
      <View>
        <Text style={styles.title}>Rippl.</Text>
        <Text style={styles.subtitle}>Where small connections make big waves.</Text>
      </View>
      <View>
        <Text>SVGSs will go here</Text>
      </View>
      <View>
        <Text>Create an account to join our waitlist.</Text>
        <View>
          <Pressable>sign up</Pressable>
          <Pressable>updates</Pressable>
        </View>
        <Text>Not sure? Learn more about us here.</Text>
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