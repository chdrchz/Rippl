import React from "react";
import { router } from "expo-router"; // Import Link from expo-router
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Pressable, StyleSheet } from "react-native";

import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";

import LeafMound from "../assets/images/leaf_mound.svg";
import Bikers from "../assets/images/bikes.svg";
import SelfieGirls from "../assets/images/selfie_girls.svg";
import GuySitting from "../assets/images/guy_sitting.svg";
import Skator from "../assets/images/skator.svg";

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
        <Text style={styles.title}>
          Rippl<Text style={styles.period}>.</Text>
        </Text>
        <Text style={styles.subtitleTop}>
          Where small connections make big waves.
        </Text>
        <View style={[styles.svgContainer, styles.dropShadow]}>
          <Bikers style={styles.bikers}></Bikers>
          <SelfieGirls style={styles.selfieGirls}></SelfieGirls>
          <GuySitting style={styles.guySitting}></GuySitting>
          <Skator style={styles.skator}></Skator>
        </View>
      </View>
      <LinearGradient
        colors={[
          "rgb(255, 232, 214)",
          "rgb(214, 213, 195)",
          "rgb(124, 170, 152)",
        ]}
        locations={[0, 0.9, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.bottomHalf}
      >
        <View style={styles.buttonContainer}>
          <Text style={styles.subtitleBottom}>
            Create an account to join our waitlist.
          </Text>
          <Pressable
          onPress={() => router.push("/profile")}
          style={[styles.buttonOne, styles.dropShadow]}>
            <Text style={styles.buttonTextOne}>Sign Up</Text>
          </Pressable>
          <Pressable
            onPress={() => router.push("/updates")}
            style={[styles.buttonTwo, styles.dropShadow]}
          >
            <Text style={styles.buttonTextTwo}>Updates</Text>
          </Pressable>
          <Text style={styles.subtitleBottom}>
            Not sure? Learn more about us here.
          </Text>
        </View>
        <LeafMound style={styles.leafMound} />
      </LinearGradient>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  landing: {
    flex: 1,
    fontFamily: "Montserrat_400Regular",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    width: "100%",
    gap: 25,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#094D92",
  },
  period: {
    color: "#0077B6",
  },
  subtitleBottom: {
    fontSize: 20,
    color: "#3E594E",
    fontWeight: "bold",
    marginLeft: 25,
    marginRight: 25,
    textAlign: "center",
  },
  subtitleTop: {
    fontSize: 20,
    color: "#094D92",
    fontWeight: "bold",
    marginLeft: 25,
    marginRight: 25,
    textAlign: "center",
  },
  svgContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    borderBottomWidth: 2,
    borderColor: "black",
    position: "relative",
  },
  bikers: {
    width: 100,
    height: 100,
    marginBottom: -9,
  },
  selfieGirls: {
    width: 120,
    height: 120,
    marginBottom: -18,
  },
  guySitting: {
    width: 90,
    height: 90,
    marginBottom: -43,
  },
  skator: {
    width: 110,
    height: 120,
    marginBottom: -25,
  },
  buttonContainer: {
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    position: "relative",
    gap: 30,
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
    textAlign: "center",
    justifyContent: "center",
    width: 250,
    height: 50,
  },
  buttonTextOne: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#56766A",
  },
  buttonTextTwo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFE8D6",
    textAlign: "center",
    alignItems: "center",
  },
  linkText: {
    color: "#007AFF",
  },
  topHalf: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 50,
    gap: 30,
  },
  bottomHalf: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFE8D6",
    justifyContent: "center",
    position: "relative",
    alignItems: "center",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    overflow: "hidden",
  },
  leafMound: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    margin: 0,
    padding: 0,
    left: 0,
    right: 0,
    transform: [{ scale: 1.2 }],
  },
  dropShadow: {
    // iOS shadow
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Android shadow
    elevation: 4,
  },
});
