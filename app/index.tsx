import { Redirect } from 'expo-router';
import { useAuth } from './context/AuthContext';

export default function Index() {
  const { user, isLoading } = useAuth();

  // Show loading state while checking auth
  if (isLoading) {
    return null; // The root layout will show the loading indicator
  }

  // Redirect based on auth state
  return <Redirect href={user ? "/(tabs)" : "/(auth)/login"} />;
} 