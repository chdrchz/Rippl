import { View } from "react-native";
import AppText from "../AppText";
import ButtonOutline from "../ButtonOutline";
import ButtonSolid from "../ButtonSolid";
import ButtonPlainLink from "../ButtonPlainLink";
import { Link } from "expo-router";

export default function LandingView({ onViewChange }) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", gap: 20 }}>
      <AppText>Create an account to join our waitlist.</AppText>
      <ButtonOutline onPress={() => onViewChange("signup")}>Sign Up</ButtonOutline>
      <ButtonSolid onPress={() => onViewChange("signin")}>Sign In</ButtonSolid>
      <AppText>
        Not sure? Learn more about us{" "}
        <ButtonPlainLink>
          <Link href="/about">here</Link>
        </ButtonPlainLink>
      </AppText>
    </View>
  );
}