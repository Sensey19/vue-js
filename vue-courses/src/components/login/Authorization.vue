<template>
    <div class="login">
        <div v-if="step === 'signIn'">
            <h4 class="login-title">Authorization</h4>
            <div class="login-block">
                <label class="login-label">Email</label>
                <input v-model="email" type="email" placeholder="E-mail">
            </div>

            <div class="login-block">
                <label class="login-label">Password</label>
                <input v-model="password" type="password">
            </div>

            <span v-if="error.login.type1" class="error-msg">{{error.login.msg1}}</span>
            <span v-if="error.login.type2" class="error-msg">{{error.login.msg2}}</span>
            <button @click="loginUser" class="login-register">Login</button>
        </div>


        <div v-if="step === 'signUp'">
            <h4 class="login-title">Register</h4>

            <div class="login-block">
                <label class="login-label">Name</label>
                <input v-model="name" type="text">
            </div>

            <div class="login-block">
                <label class="login-label">Email</label>
                <input v-model="email" type="email" placeholder="E-mail">
            </div>

            <div class="login-block">
                <label class="login-label">Password</label>
                <input v-model="password" type="password">
            </div>

            <div class="login-block">
                <label class="login-label">Password Confirmation</label>
                <input v-model="password_confirm" type="password">
            </div>

            <span v-if="error.register.type" class="error-msg">{{error.register.msg}}</span>
            <button @click="registerUser" class="login-register">Register</button>
        </div>


        <div class="login__buttons">
            <button @click="step = 'signIn'"
                    :class="{active: step === 'signIn'}"
                    class="login__buttons-btn">Sign In
            </button>
            <button @click="step = 'signUp'"
                    :class="{active: step === 'signUp'}"
                    class="login__buttons-btn">Sign Up
            </button>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    import validation from './validation';

    export default {
        mixins: [validation],
        data() {
            return {
                step: 'signIn',
                name: '',
                email: '',
                password: '',
                password_confirm: '',
                error: {
                    login: {
                        type1: false,
                        msg1: 'Fill in the correct fields',
                        type2: false,
                        msg2: 'Sign up first'
                    },
                    register: {
                        type: false,
                        msg: 'Fill in the correct fields',
                    }
                }
            }
        },
        computed: {
            ...mapState({
                user: state => state.user,
                show: state => state.loginShow
            }),
        },
        methods: {
            ...mapActions({
                'addUser': 'addUser',
                'loginShow': 'loginShow'
            }),
            loginUser() {
                this.checkUser();
            },
            registerUser() {
                const vm = this;
                const user = [];

                if (vm.validEmail(vm.email) && vm.password === vm.password_confirm) {
                    user.push({
                        name: vm.name,
                        email: vm.email,
                        password: vm.password,
                        password_confirm: vm.password_confirm
                    });

                    vm.step = 'signIn';
                    vm.clearData();
                    vm.addUser(user);
                } else {
                    vm.error.register.type = true;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'Authorization.scss';
</style>