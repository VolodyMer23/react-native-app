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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
