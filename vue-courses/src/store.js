import Vue from 'vue';
import Vuex from 'vuex';

const ADD_USER = 'ADD_USER';
const LOGIN_SHOW = 'LOGIN_SHOW';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: [],
        loginShow: false
    },
    mutations: {
        [ADD_USER](state, user) {
            state.user = user;
        },
        [LOGIN_SHOW](state, bool) {
            state.loginShow = bool;
        }
    },
    actions: {
        addUser({commit}, payload) {
            commit(ADD_USER, payload);
        },
        loginShow({commit}, payload) {
            commit(LOGIN_SHOW, payload);
        }
    }
})
