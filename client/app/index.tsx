import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { BlueGradient, BrownGradient } from "./components/GradientBackgrounds";
import AppHeaderText from "./components/AppHeaderText";
import AppText from "./components/AppText";

// SVGs
import Bikers from "../assets/images/bikes.svg";
import SelfieGirls from "../assets/images/selfie_girls.svg";
import GuySitting from "../assets/images/guy_sitting.svg";
import Skator from "../assets/images/skator.svg";
import LeafMound from "../assets/images/leaf_mound.svg";

// Views
import LandingView from "./components/views/LandingView";
import SignupView from "./components/views/SignUpView";
import SigninView from "./components/views/SignInView";

export default function LandingScreen() {
  const [view, setView] = useState("landing");

  const renderView = () => {
    switch (view) {
      case "landing":
        return <LandingView onViewChange={setView} />;
      case "signup":
        return <SignupView onViewChange={setView} />;
      case "signin":
        return <SigninView onViewChange={setView} />;
      default:
        return null;
    }
  };

  return (
    <BlueGradient style={styles.landing}>
      <View style={styles.topHalf}>
        <AppHeaderText>Rippl.</AppHeaderText>
        <AppText>Where small connections make big waves.</AppText>
        {view === "landing" && (
          <View style={styles.svgContainer}>
            <Bikers style={styles.bikers} />
            <SelfieGirls style={styles.selfieGirls} />
            <GuySitting style={styles.guySitting} />
            <Skator style={styles.skator} />
          </View>
        )}
      </View>
      <BrownGradient
        style={[styles.bottomHalf, { flex: view === "landing" ? 1 : 2 }]}
      >
        <View style={styles.contentContainer}>{renderView()}</View>
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
    width: "80%",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    position: "relative",
    gap: 30,
    zIndex: 2,
  },
  contentContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
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
});
