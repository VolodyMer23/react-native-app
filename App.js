import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./App/Screens/RegistrationScreen";
import Home from "./App/Screens/Home/Home";
import LoginScreen from "./App/Screens/LoginScreen";
import PostsScreen from "./App/Screens/PostsScreen";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useState } from "react";
import { useEffect } from "react";
export default function App() {
  const [user, setUser] = useState(auth.currentUser);
  const Stack = createStackNavigator();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUser(uid);
      } else {
        // User is signed out
        // ...
      }
    });

  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Registartion" component={RegistrationScreen} />
        {!user && <Stack.Screen name="Login" component={LoginScreen} />}
        <Stack.Screen name="Posts" component={PostsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
