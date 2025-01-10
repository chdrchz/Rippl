import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Pressable, StyleSheet } from "react-native";

// These are the wrappers for every text element to 
// maintain consistency between text elements
import AppText from './components/AppText';
import AppHeaderText from "./components/AppHeaderText";

// Buttons with borders + w/o
import ButtonOutline from "./components/ButtonOutline";
import ButtonSolid from "./components/ButtonSolid";

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
      style={[styles.landing]}
    >
      <View style={styles.topHalf}>
        <AppHeaderText>Rippl<Text style={styles.period}>.</Text></AppHeaderText>
        <AppText>Where small connections make big waves.</AppText>
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
          "rgb(193, 192, 165)",
        ]}
        locations={[0, 0.95, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.bottomHalf}
      >
        <View style={styles.buttonContainer}>
          <AppText>Create an account to join our waitlist.</AppText>
          <Link href="/profile">
            <ButtonOutline>
              Sign Up
            </ButtonOutline>
          </Link>
          <Link href="/updates">
            <ButtonSolid>
              Updates
            </ButtonSolid>
          </Link>
          <AppText>
            Not sure? Learn more about us{" "}
            <Pressable>
              <Link href="/about">
                <AppText>here</AppText>
              </Link>
            </Pressable>
          </AppText>
        </View>
        <LeafMound style={styles.leafMound} />
      </LinearGradient>
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
    gap: 25,
  },
  period: {
    color: "#0077B6",
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
    fontFamily: 'Montserrat-700',
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
    fontFamily: 'Montserrat-700',
  },
  buttonThree: {
    width: "auto",
    margin: 0,
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
