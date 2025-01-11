import { Link } from "expo-router";
import { StyleSheet } from "react-native";

export default function SocialLinks({ svg: SvgComponent }) {
    return (
        <Link href="https://google.com/">
            {SvgComponent && <SvgComponent style={styles.svg} />}
        </Link>
    )
}

const styles = StyleSheet.create({
    svg: {
        height: 50,
    }
})