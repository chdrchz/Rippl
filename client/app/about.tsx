import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import AppHeaderText from "./components/AppHeaderText";
import AppTextThin from "./components/AppTextThin";
import AppText from "./components/AppText";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <AppHeaderText>About Rippl.</AppHeaderText>
      <AppTextThin>
        Rippl is a social media platform designed to help you find and nurture
        your passions. Whether you're looking to connect with friends, meet new
        people, or discover exciting classes and events, Rippl has you covered.
      </AppTextThin>
      <View style={styles.section}>
        <AppText>Our Mission</AppText>
        <AppTextThin>
          To build a community where people can explore their hobbies, find
          like-minded individuals, and create meaningful connections.
        </AppTextThin>
      </View>
      <View style={styles.section}>
        <AppText>Features</AppText>
        <AppTextThin>
          - Swipe matching to connect with people sharing your interests{"\n"}-
          Discover classes and events tailored to your hobbies{"\n"}-
          Personalized feeds to stay updated on your network
        </AppTextThin>
      </View>
      <View style={styles.section}>
        <AppText>Why Choose Us?</AppText>
        <AppTextThin>
          We go beyond just connecting people. Hobby Hop helps you dive deep
          into your interests while fostering a sense of belonging in a
          community that truly resonates with your passions.
        </AppTextThin>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 25,
  },
  section: {},
});
