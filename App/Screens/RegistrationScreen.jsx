import React, { useState } from "react";
import {
  Title,
  Wrapper,
  Input,
  InputView,
  FormButton,
  TextButton,
} from "../StyledComponents";

export default function RegistrationScreen() {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <Wrapper>
      <Title>Реєстрація</Title>
      <InputView>
        <Input onChangeText={setLogin} value={login} placeholder="Логін" />
        <Input
          onChangeText={setEmail}
          value={email}
          placeholder="Адреса електронної пошти"
        />
        <Input
          onChangeText={setPassword}
          value={password}
          placeholder="Пароль"
        />
      </InputView>
      <FormButton>
        <TextButton>Зареєструватися</TextButton>
      </FormButton>
    </Wrapper>
  );
}
