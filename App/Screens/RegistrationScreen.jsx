import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ImageBackground, TouchableWithoutFeedback, Keyboard, View, Text } from "react-native";
import { auth } from "../../firebaseConfig";
import * as DocumentPicker from "expo-document-picker";
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
  SubText,
} from "../StyledComponents";

export default function RegistrationScreen({ navigation }) {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);

  const signUp = async () => {
    try {
      const resp = await createUserWithEmailAndPassword(auth, email, password);
      console.log("user :>> ", resp);
      setEmail("");
      setHidePass("");
    } catch (error) {
      throw error;
    }
  };
  const onFileUpload = async () => {
    const fileInfo = await DocumentPicker.getDocumentAsync();
    console.log('fileInfo :>> ', fileInfo);
}
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
              <View>
                <Text onPress={onFileUpload}>+</Text>
              </View>
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
              <SubText>
                Вже є акаунт?{" "}
                <TextLink onPress={() => navigation.navigate("Login")}>
                  Увійти
                </TextLink>
              </SubText>
            </KbdAvoiViewWrapper>
          </FormWrapper>
        </ImageBackground>
      </Wrapper>
    </TouchableWithoutFeedback>
  );
}
