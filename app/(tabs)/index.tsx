import { Text } from '@/components/ThemedText';
import { FlatList, StyleSheet, View } from 'react-native';
import { PostCard } from '../../components/PostCard';
import Header from '../../components/ui/Header';

type Post = {
  id: string;
  author: { name: string; avatar: string };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
};

const posts: Post[] = [
  {
    id: '1',
    author: { name: 'Sarah Smith', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
    content: '$AAPL stock gaining momentum, approaching its all-time high.',
    timestamp: '1h ago',
    likes: 115,
    comments: 20,
  },
  {
    id: '2',
    author: { name: 'Mike Johnson', avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
    content: '#Startup\n[Chart Image Placeholder]',
    timestamp: '2h ago',
    likes: 210,
    comments: 30,
  },
];

export default function FeedScreen() {
  return (
    <View style={styles.container}>
      <Header onMenuPress={() => { /* open drawer or menu logic here */ }} />
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostCard post={item} />}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No posts yet</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: '#8B949E',
  },
});
