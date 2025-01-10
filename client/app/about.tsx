import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://your-app-logo-url.com/logo.png' }}
        style={styles.logo}
      />
      <Text style={styles.heading}>About Hobby Hop</Text>
      <Text style={styles.description}>
        Hobby Hop is a social media platform designed to help you find and nurture your passions. Whether you're looking to connect with friends, meet new people, or discover exciting classes and events, Hobby Hop has you covered.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.sectionText}>
          To build a community where people can explore their hobbies, find like-minded individuals, and create meaningful connections.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Features</Text>
        <Text style={styles.sectionText}>
          - Swipe matching to connect with people sharing your interests{'\n'}
          - Discover classes and events tailored to your hobbies{'\n'}
          - Personalized feeds to stay updated on your network
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Why Choose Us?</Text>
        <Text style={styles.sectionText}>
          We go beyond just connecting people. Hobby Hop helps you dive deep into your interests while fostering a sense of belonging in a community that truly resonates with your passions.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 50,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  sectionText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
});