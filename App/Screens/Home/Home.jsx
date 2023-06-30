import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { TextButton} from "../../StyledComponents";
import { Wrapper, BtnWrapper, AuthButton } from "./Home.styled";
import { auth } from "../../../firebaseConfig";

function Home({ navigation }) {
  const [user, setUser] = useState(auth.currentUser);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUser(uid);
        navigation.navigate("Posts");
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);
  return (
    <Wrapper>
      <ImageBackground
        source={require("../../images/main-bg.jpg")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        {!user && (
          <BtnWrapper>
            <AuthButton onPress={() => navigation.navigate("Registartion")}>
              <TextButton>Реєстрація</TextButton>
            </AuthButton>
            <AuthButton onPress={() => navigation.navigate("Login")}>
              <TextButton>Увійти</TextButton>
            </AuthButton>
          </BtnWrapper>
        )}
      </ImageBackground>
    </Wrapper>
  );
}

export default Home;
