import { useFonts } from 'expo-font';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function ButtonSolid({ children }) {
    const [fontsLoaded] = useFonts({
        'Montserrat-700': require('../../assets/fonts/montserrat-latin-700-normal.ttf'),
      });
    
      if (!fontsLoaded) {
        console.error("font failed to load");
        return null;
      }

    return (
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#56766A",
        borderWidth: 2,
        borderColor: "#56766A",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        width: 250,
        height: 50,
      },
    buttonText: {
        color: "#FFE8D6",
        fontSize: 20,
        fontFamily: "Montserrat-700",
    }
})