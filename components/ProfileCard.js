import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function ProfileCard({ name, role, imageSource }) {
  const handlePress = () => {
    Alert.alert('Profil', `${name}’in profiline dokundunuz.`);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      style={styles.card} 
    >
      <Image source={imageSource} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>{role}</Text>
    </TouchableOpacity>
  );
}

const AVATAR_SIZE = 100;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginVertical: 10,
    elevation: 4,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  role: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
