import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./App/Screens/RegistrationScreen";
import Home from "./App/Screens/Home";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registartion">
        <Stack.Screen name="Registartion" component={RegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
