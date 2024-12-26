import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function LandingScreen() {
  return (
    <View style={styles.landing}>
      <View>
        <Text style={styles.title}>Rippl.</Text>
        <Text style={styles.subtitle}>
          Where small connections make big waves.
        </Text>
      </View>
      <View>
        <Text>SVGSs will go here</Text>
      </View>
      <View>
        <Text>Create an account to join our waitlist.</Text>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>sign up</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>sign up</Text>
          </Pressable>
        </View>
        <Text>Not sure? Learn more about us here.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  landing: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#666666",
  },
  buttonContainer: {
    flexDirection: "column",
    gap: 10,
    marginVertical: 10,
    textAlign: "center",
  },
  button: {
    padding: 10,
    backgroundColor: "#007AFF",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
  actionText: {
    marginBottom: 10,
  },
  linkText: {
    color: "#007AFF",
  },
});
