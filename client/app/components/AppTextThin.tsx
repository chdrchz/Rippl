import { useFonts } from 'expo-font';
import { Text, StyleSheet } from 'react-native';

export default function AppTextThin({ children }) {
    const [fontsLoaded] = useFonts({
        'Montserrat-400': require('../../assets/fonts/montserrat-latin-400-normal.ttf'),
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
        fontFamily: 'Montserrat-400',
        color: "#094D92",
        fontSize: 20,
        textAlign: "center",
        marginLeft: 20,
        marginRight: 20,
    }
})