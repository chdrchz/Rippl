import { useState } from "react";
import { useFonts } from 'expo-font';
import { TextInput, StyleSheet, View } from "react-native";

export default function InputField({ placeholder, svg: SvgComponent }) {
  const [text, setText] = useState("");

  const [fontsLoaded] = useFonts({
    'Montserrat-700': require('../../assets/fonts/montserrat-latin-700-normal.ttf'),
  });

  if (!fontsLoaded) {
    console.error("font failed to load");
    return null;
  }

  return (
    <View style={styles.inputContainer}>
      {SvgComponent && <SvgComponent style={styles.svg} />}
      <TextInput
        onChangeText={setText}
        placeholder={placeholder}
        value={text}
        style={styles.input}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
      height: 50,
      width: "80%",
      fontFamily: "Montserrat-700",
      outlineStyle: "none",
      fontSize: 20,
      color: "#56766A",
    },
    inputContainer: {
      flexDirection: "row",
      width: "100%",
      gap: 20,
      borderWidth: 2,
      borderRadius: 50,
      borderColor: "#56766A",
      paddingLeft: 20,
    },
    svg: {
      height: "auto",
    }
})
