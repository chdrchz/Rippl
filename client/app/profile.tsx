import { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { fetchUsers } from '../api/users';  // adjust path as needed

function ProfileScreen() {
  const [users, setUsers] = useState(null);

  const getUsers = async () => {
    try {
      const fetchedUsers = await fetchUsers();
      setUsers(fetchedUsers);
      console.log('Users:', fetchedUsers);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button 
        title="Get Users" 
        onPress={getUsers}
      />
      
      {users && users.map(user => (
        <Text key={user.id}>
          {user.name} {/* adjust based on your user data structure */}
        </Text>
      ))}
    </View>
  );
}

export default ProfileScreen;