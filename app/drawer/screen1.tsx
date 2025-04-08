import { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../context/auth';
import { useRouter } from 'expo-router';;

export default function Screen1() {
  return (
    <View>
      <Text>Welcome to Screen 1</Text>
    </View>
  );
}
