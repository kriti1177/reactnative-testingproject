import { Slot } from 'expo-router';
import { AuthProvider } from '../context/auth'; // ✅ correct path

export default function RootLayout() {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
