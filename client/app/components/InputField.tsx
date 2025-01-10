import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

export default function InputField({ placeholder }) {
  const [text, setText] = useState("");

  return (
    <TextInput
      onChangeText={setText}
      placeholder={placeholder}
      value={text}
      style={styles.input}
    ></TextInput>
  );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: "80%",
    }
})
