import { LinearGradient } from "expo-linear-gradient";

export function BlueGradient({ children, style }) {
  return (
    <LinearGradient
      colors={["rgb(0, 119, 182)", "rgb(66, 148, 190)", "rgb(255, 232, 214)"]}
      locations={[0, 0.17, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={style}
    >
      {children}
    </LinearGradient>
  );
}

export function BrownGradient({ children, style }) {
  return (
    <LinearGradient
      colors={[
        "rgb(255, 232, 214)",
        "rgb(214, 213, 195)",
        "rgb(193, 192, 165)",
      ]}
      locations={[0, 0.95, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={style}
    >
      {children}
    </LinearGradient>
  );
}
