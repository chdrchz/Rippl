import { useFonts } from "expo-font";
import { Pressable, Text, StyleSheet } from "react-native";

export default function ButtonOutline({ children, onPress }) {
  const [fontsLoaded] = useFonts({
    "Montserrat-700": require("../../assets/fonts/montserrat-latin-700-normal.ttf"),
  });

  if (!fontsLoaded) {
    console.error("font failed to load");
    return null;
  }

  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFE8D6",
    borderWidth: 2,
    borderColor: "#56766A",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 50,
  },
  buttonText: {
    color: "#56766A",
    fontSize: 20,
    fontFamily: "Montserrat-700",
  },
});
