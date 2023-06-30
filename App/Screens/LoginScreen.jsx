import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
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
  ShowPassBtn,
  ShowPassText,
} from "../StyledComponents";
import { ImageBackground, ToastAndroid } from "react-native";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);

  console.log("email :>> ", email);
  console.log("password :>> ", password);

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      "You are logged in",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  const loginDB = async () => {
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setEmail("");
      setPassword("");
      showToastWithGravityAndOffset();
      navigation.navigate("Posts");
      return credentials.user;
    } catch (error) {
      throw error;
    }
  };

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
                onChangeText={(text) => setEmail(text)}
                value={email}
                autoCapitalize="none"
                placeholder="Адреса електронної пошти"
                placeholderTextColor={"#bdbdbd"}
              />
              <Input
                onChangeText={(pass) => setPassword(pass)}
                contextMenuHidden={true}
                value={password}
                autoCapitalize="none"
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
            <FormButton onPress={loginDB}>
              <TextButton>Увійти</TextButton>
            </FormButton>
          </KbdAvoiViewWrapper>
        </FormWrapper>
      </ImageBackground>
    </Wrapper>
  );
}

export default LoginScreen;
