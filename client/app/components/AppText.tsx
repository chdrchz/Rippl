import { useFonts } from 'expo-font';
import { Text, StyleSheet } from 'react-native';

export default function AppText({ children }) {
    const [fontsLoaded] = useFonts({
        'Montserrat-700': require('../../assets/fonts/montserrat-latin-700-normal.ttf'),
      });
    
      if (!fontsLoaded) {
        console.error("font failed to load");
        return null;
      }

    return (
        <Text style={styles.text}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Montserrat-700',
        color: "#094D92",
        fontSize: 20,
        textAlign: "center",
        marginLeft: 25,
        marginRight: 25,
    }
})