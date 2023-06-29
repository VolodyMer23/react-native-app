import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { TextButton} from "../../StyledComponents";
import { Wrapper, BtnWrapper, AuthButton } from "./Home.styled";

function Home({ navigation }) {
  return (
    <Wrapper>
      <ImageBackground
        source={require("../../images/main-bg.jpg")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <BtnWrapper>
          <AuthButton onPress={() => navigation.navigate("Registartion")}>
            <TextButton>Реєстрація</TextButton>
          </AuthButton>
          <AuthButton onPress={() => navigation.navigate("Login")}>
            <TextButton>Увійти</TextButton>
          </AuthButton>
        </BtnWrapper>
      </ImageBackground>
    </Wrapper>
  );
}

export default Home;
