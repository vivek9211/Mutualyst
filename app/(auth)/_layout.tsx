import { Redirect, Stack } from 'expo-router';
import { useAuth } from '../context/AuthContext';

export default function AuthLayout() {
  const { user, isLoading } = useAuth();

  // If user is logged in, redirect to main app
  if (!isLoading && user) {
    return <Redirect href="/(tabs)" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="login"
        options={{
          title: 'Login',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          title: 'Register',
          headerShown: false,
        }}
      />
    </Stack>
  );
} 