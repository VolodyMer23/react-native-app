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
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
export const BtnWrapper = styled(View)`
  display: flex;
  margin-top: auto;
  padding-top: 36px;
  padding-bottom: 36px;
  border-top-right-radius: 36px;
  border-top-left-radius: 36px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background-color: #ffffff;
`;

export const AuthButton = styled(TouchableOpacity)`
  display: flex;
  min-width: 150px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 8px 16px;
  border-radius: 16px;
  background-color: #ff6c00;
`;
