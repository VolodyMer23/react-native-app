import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { TextButton, FormButton} from "../../StyledComponents";
import { Wrapper, BtnWrapper } from "./Home.styled";

function Home({ navigation }) {
  return (
    <Wrapper>
      <ImageBackground
        source={require("../../images/main-bg.jpg")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <BtnWrapper>
          <FormButton onPress={() => navigation.navigate("Registartion")}>
            <TextButton>Реєстрація</TextButton>
          </FormButton>
          <FormButton onPress={() => navigation.navigate("Login")}>
            <TextButton>Увійти</TextButton>
          </FormButton>
        </BtnWrapper>
      </ImageBackground>
    </Wrapper>
  );
}

export default Home;
