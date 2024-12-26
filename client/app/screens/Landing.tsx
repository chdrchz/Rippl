import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Pressable, StyleSheet } from "react-native";

import LeafMound from "../../assets/images/svg/landingPage/leaf_mound";

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

        <View style={styles.learnMoreContainer}>
          <Text style={styles.subtitle}>
            Not sure? Learn more about us here.
          </Text>
          <LeafMound style={styles.leafMound} />
        </View>
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
    width: "100%",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#094D92",
  },
  subtitle: {
    fontSize: 20,
    color: "#094D92",
  },
  buttonContainer: {
    flexDirection: "column",
    textAlign: "center",
    position: 'relative',
    marginTop: 100,
    gap: 25,
    zIndex: 2,
  },
  buttonOne: {
    backgroundColor: "#FFE8D6",
    borderWidth: 2,
    borderColor: "#56766A",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 50,
  },
  buttonTwo: {
    backgroundColor: "#56766A",
    borderWidth: 2,
    borderColor: "#56766A",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 50,
  },
  buttonTextOne: {
    color: "#56766A",
  },
  buttonTextTwo: {
    color: "#FFE8D6",
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
    justifyContent: "flex-start",
    position: 'relative',
    alignItems: "center",
    paddingTop: 25,
  },
  leafMound: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    margin: 0,
    padding: 0,
    left: 0,
    right: 0,
  },
  learnMoreContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
});
