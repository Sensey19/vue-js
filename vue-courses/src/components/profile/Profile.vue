<template>
    <div class="login-success">
        <h4 class="login-success_title">Hello {{name}}!</h4>
        <button @click="logOut" class="login-success_btn">Log out</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: this.$store.state.user[0].name
            }
        },
        methods: {
            logOut() {
                this.$router.push("/");
                setTimeout(() => {
                    window.location.reload(true);
                }, 1000);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'Profile';
</style>