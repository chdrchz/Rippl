import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LandingScreen from '../screens/Landing';

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return <LandingScreen />;
}
