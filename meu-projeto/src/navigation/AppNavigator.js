import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import DashboardScreen from '../screens/DashboardScreen';
import ChecklistScreen from '../screens/ChecklistScreen';
import { ClerkProvider } from '@clerk/clerk-expo';
import Constants from 'expo-constants';

const Stack = createNativeStackNavigator();

const PUBLIC_CLERK_PUBLISHABLE_KEY = Constants.expoConfig.extra.clerkPublishableKey;

const AppNavigator = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <ClerkProvider publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Checklist" component={ChecklistScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </ClerkProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default AppNavigator;