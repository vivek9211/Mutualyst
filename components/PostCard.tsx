import { Image, StyleSheet, View } from 'react-native';
import { Text } from './ThemedText';

export interface Post {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
}

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: post.author.avatar }} style={styles.avatar} />
        <View style={styles.headerText}>
          <Text style={styles.authorName}>{post.author.name}</Text>
          <Text style={styles.timestamp}>{post.timestamp}</Text>
        </View>
      </View>
      <Text style={styles.content}>{post.content}</Text>
      <View style={styles.footer}>
        <Text style={styles.stats}>{post.likes} likes</Text>
        <Text style={styles.stats}>{post.comments} comments</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161B22',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#21262D',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  authorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#E6EDF3',
  },
  timestamp: {
    fontSize: 12,
    color: '#8B949E',
  },
  content: {
    fontSize: 15,
    lineHeight: 20,
    marginBottom: 12,
    color: '#E6EDF3',
  },
  footer: {
    flexDirection: 'row',
    gap: 16,
  },
  stats: {
    fontSize: 14,
    color: '#8B949E',
  },
}); 