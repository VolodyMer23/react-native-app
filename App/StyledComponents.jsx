import styled from "styled-components";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
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
  padding: 4px;
  padding-left: 8px;
  border-width: 1px;
  border-radius: 4px;
`;

export const FormButton = styled(TouchableOpacity)`
  display: flex;
  text-align: center;
  padding: 8px 16px;
  border-radius: 16px;
  background-color: #ff6c00;
`;

export const TextButton = styled(Text)`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 700;
`;
