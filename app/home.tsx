import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { AuthContext } from '../context/auth'; // ✅ sahi path

export default function Home() {
  const { logout, isLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  return (
    <View>
      <Text>Home Screen</Text>
      <Text>Logged In: {isLoggedIn ? 'Yes' : 'No'}</Text>
      <Button title="Logout" onPress={() => { logout(); router.replace('/login'); }} />
    </View>
  );
}
