import Vue from 'vue';
import Vuex from 'vuex';
import address from "./modules/address";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        address,
        user
    },
    strict: true,
});