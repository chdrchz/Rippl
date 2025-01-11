import { View, StyleSheet } from "react-native";
import AppText from "../AppText";
import InputField from "../InputField";
import ButtonOutline from "../ButtonOutline";
import ButtonPlainLink from "../ButtonPlainLink";
import SocialLinks from "../SocialLinks";

// svgs
import Email from "../../../assets/images/email.svg";
import Lock from "../../../assets/images/lock.svg";
import Google from "../../../assets/images/google.svg";

export default function SigninView({ onViewChange }) {
  return (
    <View style={styles.signIn}>
      <AppText>Sign In</AppText>
      <InputField placeholder="Email" svg={Email}/>
      <InputField placeholder="Password" svg={Lock}/>
      <AppText>--- or sign in with ---</AppText>
      <View style={styles.socialLinks}>
        <SocialLinks svg={Google}></SocialLinks>
      </View>
      <AppText>
        Don't have an account?
        <ButtonPlainLink onPress={() => onViewChange("signup")}>
          Sign Up
        </ButtonPlainLink>
      </AppText>
      <ButtonOutline onPress={() => onViewChange("landing")}>
        Back to Landing
      </ButtonOutline>
    </View>
  );
}

const styles = StyleSheet.create({
  signIn: {
    width: "80%",
    gap: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  socialLinks: {
    height: "auto",
  }
})
