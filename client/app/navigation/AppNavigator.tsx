import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { LinkingOptions } from "@react-navigation/native";

import LandingScreen from "../screens/Landing";
import MainTabScreen from "../(tabs)/index";

const Stack = createStackNavigator();

const linking: LinkingOptions<any> = {
  prefixes: ['http://localhost:8081'],
  config: {
    screens: {
      Landing: '',
      MainTab: 'tabs/*'  // Add nested tab routes
    }
  }
};

export default function AppNavigator() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="MainTab" component={MainTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
