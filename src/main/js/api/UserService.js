/* eslint class-methods-use-this: 0 */
import axios from 'axios';
import API_ROUTES from './api_routes';
import { BaseService } from './BaseService';

export default class UserService extends BaseService {
  async getUsers() {
    try {
      const response = await axios.get(API_ROUTES.USER.SHOW);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async createUser(data) {
    try {
      const response = await axios.post(API_ROUTES.USER.CREATE, data);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getUser(userUuid) {
    try {
      const response = await axios.get(API_ROUTES.USER.READ(userUuid));
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateUser(userUuid, data) {
    try {
      const response = await axios.post(API_ROUTES.USER.UPDATE(userUuid), data);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteUser(userUuid) {
    try {
      const response = await axios.delete(API_ROUTES.USER.DELETE(userUuid));
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
