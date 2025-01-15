import { View, StyleSheet } from "react-native";
import AppText from "../AppText";
import InputField from "../InputField";
import ButtonPlainLink from "../ButtonPlainLink";
import SocialLinks from "../SocialLinks";

// svgs
import Email from "../../../assets/images/email.svg";
import Lock from "../../../assets/images/lock.svg";
import Google from "../../../assets/images/google.svg";
import ButtonSolid from "../ButtonSolid";
import AppTextThin from "../AppTextThin";

export default function SigninView({ onViewChange }) {
  return (
    <View style={styles.signIn}>
      <AppTextThin>Welcome back!</AppTextThin>
      <InputField placeholder="Email" svg={Email}/>
      <InputField placeholder="Password" svg={Lock}/>
      <ButtonSolid onPress={() => console.log("successfully clicked button")}>Sign In</ButtonSolid>
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
      <ButtonPlainLink onPress={() => onViewChange("landing")}>
        Back to landing
      </ButtonPlainLink>
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
