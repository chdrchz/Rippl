import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import LandingScreen from "../screens/Landing.tsx";
import UpdatesScreen from "../screens/Updates.tsx";

const Stack = createStackNavigator();

export default function AppNavigator() {
  console.log('AppNavigator is being rendered');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Updates" component={UpdatesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
