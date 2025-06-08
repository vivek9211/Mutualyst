import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface HeaderProps {
  onMenuPress: () => void;
}

export default function Header({ onMenuPress }: HeaderProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
        <FontAwesome name="bars" size={24} color="#C9D1D9" />
      </TouchableOpacity>
      <Text style={styles.title}>Mutualyst</Text>
      <View style={styles.rightSpace} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0D1117',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#161B22',
  },
  menuButton: {
    padding: 4,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: '#E6EDF3',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  rightSpace: {
    width: 28, // To balance the hamburger icon
  },
}); 