import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        user: null,
        token: localStorage.getItem('token') || ''
    },
    mutations: {
        auth(state, token, user) {
            state.token = token;
            state.user = user;
        },
        me(state, user) {
            state.user = user;
        },
        logout(state) {
            state.token = '';
        },
    },
    actions: {
        login({commit}, user) {
            axios.post('http://localhost:1337/auth/local', user)
                .then(res => {
                    const token = res.data.jwt;

                    localStorage.setItem('token', token);
                    commit('auth', token, res.data.user);
                })
                .catch(e => console.log(e))

        },
        register({commit}, user) {
            axios.post('http://localhost:1337/auth/local/register', user)
                .then(res => {
                    const token = res.data.jwt;

                    localStorage.setItem('token', token);
                    commit('auth', token, res.data.user);
                })
                .catch(e => console.log(e))
        },
        jwtChecking({commit}, token) {
            axios.get('http://localhost:1337/users/me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(res => {
                    commit('me', res.data);
                })
                .catch(e => console.log(e))
        },
        logout({commit}) {
            commit('logout');
            localStorage.removeItem('token');
        }
    },
    getters: {
        loginSuccess: state => !!state.token
    }
})
