import styled from "styled-components";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

export const Title = styled(Text)`
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 700;
`;

export const Wrapper = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const InputView = styled(SafeAreaView)`
  display: flex;
  justify-content: center;

  text-align: center;
  gap: 16px;
  width: 90%;
`;

export const Input = styled(TextInput)`
  height: 46px;
  padding: 4px;
  padding-left: 8px;
  border-color: #e8e8e8;
  border-width: 1px;
  border-radius: 4px;
`;

export const FormButton = styled(TouchableOpacity)`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 8px 16px;
  border-radius: 16px;
  background-color: #ff6c00;
`;

export const TextButton = styled(Text)`
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 500;
  height: 24px;
  color: #ffffff;
`;

export const FormWrapper = styled(View)`
  position: absolute;
  bottom: 0;
  width: 100%;
  

  /* margin-top: auto; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const KbdAvoiViewWrapper = styled(KeyboardAvoidingView)`
  /* position: absolute; */
  display: flex;
  width: 100%;
  min-height: 60%;
  padding-top: 36px;
  padding-bottom: 36px;
  border-top-right-radius: 36px;
  border-top-left-radius: 36px;
  align-items: center;
  gap: 16px;
  background-color: #ffffff;
`;

export const TextLink = styled(Text)`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 400;
  text-decoration: underline;
`;
