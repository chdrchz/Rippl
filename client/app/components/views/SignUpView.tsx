import { View, StyleSheet } from "react-native";

// components
import AppText from "../AppText";
import AppTextThin from "../AppTextThin";
import InputField from "../InputField";
import ButtonOutline from "../ButtonOutline";

// svgs
import Email from "../../../assets/images/email.svg";
import Lock from "../../../assets/images/lock.svg";

export default function SignupView({ onViewChange }) {
  return (
    <View style={styles.signUp}>
      <AppTextThin>So happy you're here!</AppTextThin>
      <AppText>Sign Up</AppText>
      <InputField placeholder="Email" svg={Email}/>
      <InputField placeholder="Password" svg={Lock}/>
      <InputField placeholder="Confirm Password" svg={Lock}/>
      <ButtonOutline onPress={() => onViewChange("landing")}>
        Back to Landing
      </ButtonOutline>
    </View>
  );
}

const styles = StyleSheet.create({
  signUp: {
    width: "80%",
    gap: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  }
})
