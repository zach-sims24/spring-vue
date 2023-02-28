// Turn off certain rules for this file -- the 'state' property of an address causes some error
/* eslint no-shadow: 0 */
import AddressService from "../../api/AddressService";

const addressService = new AddressService();

const state = {
  address: null,
};

const getters = {
  address: (state) => state.address,
};

const actions = {
  async retrieveAddress({ commit }, payload) {
    try {
      // Get our decedent if we haven't already done so.
        const response = await addressService.getAddress(payload.addressUuid);
        commit('SET_ADDRESS', { address: response });
        return response;
    } catch (error) {
      return new Error(error);
    }
  },
  async createAddress({ commit }, payload) {
    try {
      // Get our decedent if we haven't already done so.
      const response = await addressService.createAddress(payload.address);
      commit('SET_ADDRESS', { address: response });
      return response;
    } catch (error) {
      return new Error(error);
    }
  },
  async updateAddress({ commit }, payload) {
    try {
      // Get our decedent if we haven't already done so.
      const response = await addressService.updateAddress(payload.address.addressUuid, payload.address);
      commit('SET_ADDRESS', { address: response });
      return response;
    } catch (error) {
      return new Error(error);
    }
  },
  async deleteAddress({ commit }, payload) {
    try {
      // Get our decedent if we haven't already done so.
      const response = await addressService.deleteAddress(payload.address.addressUuid);
      commit('SET_ADDRESS', { address: null });
      return response;
    } catch (error) {
      return new Error(error);
    }
  }
};

const mutations = {
  SET_ADDRESS(state, { address }) {
    state.address = address;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
