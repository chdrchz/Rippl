import { useFonts } from 'expo-font';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function ButtonPlainLink({ children }) {
    const [fontsLoaded] = useFonts({
        'Montserrat-700': require('../../assets/fonts/montserrat-latin-700-normal.ttf'),
      });
    
      if (!fontsLoaded) {
        console.error("font failed to load");
        return null;
      }

    return (
        <Pressable>
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        color: "#3D544C",
        fontSize: 20,
        fontFamily: "Montserrat-700",
    }
})