<template>
    <div class="login-success">
        <h4 class="login-success_title">Hello {{user.username}}!</h4>
        <button @click="logOut" class="login-success_btn">Log out</button>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        data() {
            return {}
        },
        computed: {
            ...mapState({
                user: state => state.user
                // user буде лише, коли відправити ріквест на me
                // user буде лише, коли відправити ріквест на me
                // user буде лише, коли відправити ріквест на me
            })
        },
        methods: {
            logOut() {
                this.$store.dispatch('logout')
                    .then(() => {
                        this.$router.push('/login');
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'Profile';
</style>