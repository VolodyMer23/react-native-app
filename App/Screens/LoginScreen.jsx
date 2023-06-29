import React, { useState } from "react";
import {
  Title,
  Wrapper,
  Input,
  InputView,
  FormButton,
  TextButton,
  FormWrapper,
  KbdAvoiViewWrapper,
} from "../StyledComponents";
import { ImageBackground } from "react-native";

function LoginScreen({ navigation }) {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Wrapper>
      <ImageBackground
        source={require("../images/login-bg.jpg")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <FormWrapper>
          <KbdAvoiViewWrapper
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <Title>Увійти</Title>
            <InputView>
              <Input
                onChangeText={setEmail}
                value={email}
                placeholder="Адреса електронної пошти"
                placeholderTextColor={"#bdbdbd"}
              />
              <Input
                onChangeText={setPassword}
                contextMenuHidden={true}
                value={password}
                placeholder="Пароль"
                placeholderTextColor={"#bdbdbd"}
              />
            </InputView>
            <FormButton>
              <TextButton>Увійти</TextButton>
            </FormButton>
          </KbdAvoiViewWrapper>
        </FormWrapper>
      </ImageBackground>
    </Wrapper>
  );
}

export default LoginScreen;
