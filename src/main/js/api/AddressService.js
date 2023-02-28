/* eslint class-methods-use-this: 0 */
import axios from 'axios';
import API_ROUTES from './api_routes';
import { BaseService } from './BaseService';

export default class AddressService extends BaseService {
  async createAddress(data) {
    try {
      const response = await axios.post(API_ROUTES.ADDRESS.CREATE, data);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAddress(addressUuid) {
    try {
      const response = await axios.get(API_ROUTES.ADDRESS.READ(addressUuid));
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateAddress(addressUuid, data) {
    try {
      const response = await axios.put(API_ROUTES.ADDRESS.UPDATE(addressUuid), data);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteAddress(addressUuid) {
    try {
      const response = await axios.get(API_ROUTES.ADDRESS.DELETE(addressUuid));
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
