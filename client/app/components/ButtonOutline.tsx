import { Pressable, Text, StyleSheet, Image } from 'react-native';

export function ButtonOutline({ Svg, children }) {
    return (
        <Pressable style={styles.button}>
            <Svg />
            <Text>{children}</Text>
        </Pressable>
    )
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
      }
})