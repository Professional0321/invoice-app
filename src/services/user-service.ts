import { apiServer } from './base';
import { UserType } from '@/types/type';

class UserService {
  async fetchUser(): Promise<UserType> {
    const response = await apiServer.get('users/me');
    return response.data;
  }
}

const userService = new UserService();

export default userService;
