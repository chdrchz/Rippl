import { View } from "react-native";
import AppText from "../AppText";
import InputField from "../InputField";
import ButtonOutline from "../ButtonOutline";

export default function SigninView({ onViewChange }) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", gap: 25 }}>
      <AppText>Sign In</AppText>
      <InputField placeholder="Email" />
      <InputField placeholder="Password" />
      <ButtonOutline onPress={() => onViewChange("landing")}>
        Back to Landing
      </ButtonOutline>
    </View>
  );
}
