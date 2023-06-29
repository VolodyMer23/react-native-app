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
  TextLink,
  ShowPassBtn,
  ShowPassText,
} from "../StyledComponents";
import { ImageBackground } from "react-native";

export default function RegistrationScreen({ navigation }) {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);

  return (
    <Wrapper>
      <ImageBackground
        source={require("../images/reg-bg.jpg")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <FormWrapper>
          <KbdAvoiViewWrapper
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <Title>Реєстрація</Title>
            <InputView>
              <Input
                onChangeText={setLogin}
                value={login}
                placeholder="Логін"
                placeholderTextColor={"#bdbdbd"}
              />
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
                secureTextEntry={hidePass}
              />
              <ShowPassBtn>
                <ShowPassText onPress={() => setHidePass(!hidePass)}>
                  {hidePass ? "Показати" : "Приховати"}
                </ShowPassText>
              </ShowPassBtn>
            </InputView>
            <FormButton>
              <TextButton>Зареєструватися</TextButton>
            </FormButton>
            <TextLink onPress={() => navigation.navigate("Login")}>
              Вже є акаунт? Увійти
            </TextLink>
          </KbdAvoiViewWrapper>
        </FormWrapper>
      </ImageBackground>
    </Wrapper>
  );
}
