// import 'react-native-gesture-handler';
import { Redirect } from 'expo-router';

export default function Index() {
  return <Redirect href="/splash" />;  // Redirect to login on start
}
