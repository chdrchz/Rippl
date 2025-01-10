import { View } from "react-native";
import AppText from "../AppText";
import InputField from "../InputField";
import ButtonOutline from "../ButtonOutline";

export default function SignupView({ onViewChange }) {
  return (
    <View
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 30,
        padding: 20,
      }}
    >
      <AppText>Sign Up</AppText>
      <InputField placeholder="Email" />
      <InputField placeholder="Password" />
      <InputField placeholder="Confirm Password" />
      <ButtonOutline onPress={() => onViewChange("landing")}>
        Back to Landing
      </ButtonOutline>
    </View>
  );
}
