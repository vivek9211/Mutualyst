import { Text } from '@/components/ThemedText';
import { StyleSheet, View } from 'react-native';

export default function ChatsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.placeholder}>Chats coming soon...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    color: '#8B949E',
    fontSize: 18,
  },
}); 