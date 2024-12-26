import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function LandingScreen() {
  return (
    <LinearGradient
      colors={["rgb(0, 119, 182)", "rgb(66, 148, 190)", "rgb(255, 232, 214)"]}
      locations={[0, 0.17, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.landing}
    >
      <View style={styles.topHalf}>
        <Text style={styles.title}>Rippl.</Text>
        <Text style={styles.subtitle}>
          Where small connections make big waves.
        </Text>
      </View>
      <View>
        <Text>SVGSs will go here</Text>
      </View>
      <View style={styles.bottomHalf}>
        <Text style={styles.subtitle}>
          Create an account to join our waitlist.
        </Text>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.buttonOne}>
            <Text style={styles.buttonTextOne}>Sign Up</Text>
          </Pressable>
          <Pressable style={styles.buttonTwo}>
            <Text style={styles.buttonTextTwo}>Updates</Text>
          </Pressable>
        </View>

        <Text style={styles.subtitle}>Not sure? Learn more about us here.</Text>
      </View>
    </LinearGradient>
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
    color: "#094D92",
  },
  subtitle: {
    fontSize: 18,
    color: "#094D92",
  },
  buttonContainer: {
    flexDirection: "column",
    gap: 10,
    marginVertical: 10,
    textAlign: "center",
  },
  buttonOne: {
    padding: 10,
    backgroundColor: "#FFE8D6",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#56766A",
  },
  buttonTwo: {
    padding: 10,
    backgroundColor: "#56766A",
    borderRadius: 5,
  },
  buttonTextOne: {
    color: "#56766A",
  },
  buttonTextTwo: {
    color: "#FFE8D6",
  },
  actionText: {
    marginBottom: 10,
  },
  linkText: {
    color: "#007AFF",
  },
  topHalf: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomHalf: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFE8D6",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
