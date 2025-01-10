import { SetStateAction, useState } from "react";
import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

// Wrappers for consistent text elements
import AppText from "./components/AppText";
import AppHeaderText from "./components/AppHeaderText";

// Buttons
import ButtonOutline from "./components/ButtonOutline";
import ButtonSolid from "./components/ButtonSolid";
import ButtonPlainLink from "./components/ButtonPlainLink";

// Gradients
import { BlueGradient, BrownGradient } from "./components/GradientBackgrounds";

// Svgs
import LeafMound from "../assets/images/leaf_mound.svg";
import Bikers from "../assets/images/bikes.svg";
import SelfieGirls from "../assets/images/selfie_girls.svg";
import GuySitting from "../assets/images/guy_sitting.svg";
import Skator from "../assets/images/skator.svg";

export default function LandingScreen({ onToggleView }) {
  const [view, setView] = useState("landing"); // Tracks the current view

  const handleViewChange = (newView: SetStateAction<string>) => {
    setView(newView);
    onToggleView?.(newView); // Optional callback
  };

  const renderContent = () => {
    switch (view) {
      case "landing":
        return (
          <View style={styles.buttonContainer}>
            <AppText>Create an account to join our waitlist.</AppText>
            <ButtonOutline onPress={() => handleViewChange("signup")}>
              Sign Up
            </ButtonOutline>
            <ButtonSolid onPress={() => handleViewChange("signin")}>
              Sign In
            </ButtonSolid>
            <AppText>
              Not sure? Learn more about us{" "}
              <ButtonPlainLink>
                <Link href="/about">here</Link>
              </ButtonPlainLink>
            </AppText>
          </View>
        );
      case "signup":
        return (
          <View style={styles.buttonContainer}>
            <AppText>Sign Up</AppText>
            <AppText>Fill in your details to create an account.</AppText>
            {/* Add your sign-up form or logic here */}
            <ButtonOutline onPress={() => handleViewChange("landing")}>
              Back to Landing
            </ButtonOutline>
          </View>
        );
      case "signin":
        return (
          <View style={styles.buttonContainer}>
            <AppText>Sign In</AppText>
            <AppText>Log in to your account.</AppText>
            {/* Add your sign-in form or logic here */}
            <ButtonOutline onPress={() => handleViewChange("landing")}>
              Back to Landing
            </ButtonOutline>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <BlueGradient style={[styles.landing]}>
      <View style={styles.topHalf}>
        <AppHeaderText>
          Rippl<Text style={styles.period}>.</Text>
        </AppHeaderText>
        <AppText>Where small connections make big waves.</AppText>
        <View style={styles.svgContainer}>
          <Bikers style={styles.bikers} />
          <SelfieGirls style={styles.selfieGirls} />
          <GuySitting style={styles.guySitting} />
          <Skator style={styles.skator} />
        </View>
      </View>
      <BrownGradient style={styles.bottomHalf}>
        {renderContent()}
        <LeafMound style={styles.leafMound} />
      </BrownGradient>
    </BlueGradient>
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
  }
});
