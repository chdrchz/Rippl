import { View, StyleSheet } from "react-native";

// components
import AppText from "../AppText";
import AppTextThin from "../AppTextThin";
import InputField from "../InputField";
import ButtonSolid from "../ButtonSolid";
import ButtonPlainLink from "../ButtonPlainLink";
import SocialLinks from "../SocialLinks";

// svgs
import Email from "../../../assets/images/email.svg";
import Lock from "../../../assets/images/lock.svg";
import Google from "../../../assets/images/google.svg";

export default function SignupView({ onViewChange }) {
  return (
    <View style={styles.signUp}>
      <AppTextThin>So happy you're here!</AppTextThin>
      <InputField placeholder="Email" svg={Email}/>
      <InputField placeholder="Password" svg={Lock}/>
      <InputField placeholder="Confirm Password" svg={Lock}/>
      <ButtonSolid onPress={() => console.log("successfully clicked button")}>Sign Up</ButtonSolid>
      <AppText>--- or sign up with ---</AppText>
      <View style={styles.socialLinks}>
        <SocialLinks svg={Google}></SocialLinks>
      </View>
      <AppText>
        Already have an account?
        <ButtonPlainLink onPress={() => onViewChange("signin")}>
          Log in
        </ButtonPlainLink>
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  signUp: {
    width: "80%",
    gap: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  socialLinks: {
    height: "auto",
  }
})
