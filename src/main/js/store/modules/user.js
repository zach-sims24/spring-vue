// Turn off certain rules for this file -- the 'state' property of an address causes some error
/* eslint no-shadow: 0 */
import UserService from "../../api/UserService";

const userService = new UserService();

const state = {
  users: [],
  user: null
};

const getters = {
  users: (state) => state.users,
  user: (state) => state.user,
};

const actions = {
  async retrieveUsers({ commit }) {
    try {
      // Get our decedent if we haven't already done so.
        const response = await userService.getUsers();
        commit('SET_USERS', { users: response });
        return response;
    } catch (error) {
      return new Error(error);
    }
  },
  async getUser({ commit }, payload) {
    try {
      // Get our decedent if we haven't already done so.
      const response = await userService.getUser(payload.userUuid);
      commit('SET_USER', { user: response });
      return response;
    } catch (error) {
      return new Error(error);
    }
  },
  async createUser({ commit }, payload) {
    try {
      // Get our decedent if we haven't already done so.
      const response = await userService.createUser(payload.user);
      commit('SET_USER', { user: response });
      return response;
    } catch (error) {
      return new Error(error);
    }
  },
  async updateUser({ commit }, payload) {
    try {
      // Get our decedent if we haven't already done so.
      const response = await userService.updateUser(payload.user.userUuid, payload.user);
      commit('SET_USER', { user: response });
      return response;
    } catch (error) {
      return new Error(error);
    }
  },
  async deleteUser({ commit }, payload) {
    try {
      // Get our decedent if we haven't already done so.
      const response = await userService.deleteUser(payload.user.userUuid);
      commit('SET_USER', { user: response });
      return response;
    } catch (error) {
      return new Error(error);
    }
  }
};

const mutations = {
  SET_USERS(state, { users }) {
    state.users = users;
  },
  SET_USER(state, { user }) {
    state.user = user;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
