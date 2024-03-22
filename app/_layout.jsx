import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='login/index' options={{ title: 'Connexion' }} />
        <Stack.Screen name='register/index' options={{ title: 'Inscription' }} />
        <Stack.Screen name='(app-log)' options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>

  );
}

export default RootLayout;