import { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../context/auth';
import { useRouter } from 'expo-router';

export default function Home() {
  const { logout } = useContext(AuthContext);
  const router = useRouter();

  return (
    <View>
      <Text>Welcome to Home Screen!</Text>
      <Button title="Logout" onPress={() => {
        logout();
        router.replace('/login');
      }} />
    </View>
  );
}
