import { StatusBar } from 'react-native'
import styled from 'styled-components/native';

export const Container = styled.View`
  background: #128C7E;
  padding-top: ${StatusBar.currentHeight}px;
`;

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;
export const Logo = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
export const ButtonBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 15px;
`;

export const Tabs = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 8px;
`;

export const CameraTab = styled.View`
`;

export const ChatsTab = styled.View`
  padding: 0 10px;
`;

export const StatusTab = styled.View`
  padding: 0 5px;
`;

export const CallsTab = styled.View`
  padding: 0 5px 0 0;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;