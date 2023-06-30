import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ImageBackground } from "react-native";
import { auth } from "../../firebaseConfig";

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

export default function RegistrationScreen({ navigation }) {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);

  const signUp = async () => {
    try {
      const resp = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log("user :>> ", resp);
      setEmail("");
      setHidePass("");
    } catch (error) {
      throw error;
    }
    // const resp = await createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     console.log('user :>> ', user);
    //     navigation.navigate("Login");
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //   });
  };

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
                onChangeText={(text) => setLogin(text)}
                value={login}
                placeholder="Логін"
                placeholderTextColor={"#bdbdbd"}
              />
              <Input
                onChangeText={(text) => setEmail(text)}
                value={email}
                autoCapitalize="none"
                placeholder="Адреса електронної пошти"
                placeholderTextColor={"#bdbdbd"}
              />
              <Input
                onChangeText={(pass) => setPassword(pass)}
                contextMenuHidden={true}
                autoCapitalize="none"
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
            <FormButton onPress={signUp}>
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
