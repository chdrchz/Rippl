import { API_URL } from '@env';

export const fetchUsers = async () => {
    try {
      const response = await fetch(`${API_URL}/api/users`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
};
