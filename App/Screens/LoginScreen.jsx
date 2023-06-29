import React, { useState } from "react";
import {
  Title,
  Wrapper,
  Input,
  InputView,
  FormButton,
  TextButton,
} from "../StyledComponents";

function LoginScreen({ navigation }) {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Wrapper>
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
          value={password}
          placeholder="Пароль"
          placeholderTextColor={"#bdbdbd"}
        />
      </InputView>
      <FormButton>
        <TextButton>Зареєструватися</TextButton>
      </FormButton>
    </Wrapper>
  );
}

export default LoginScreen;
