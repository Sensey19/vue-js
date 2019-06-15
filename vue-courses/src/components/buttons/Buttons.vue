<template>
    <div class="login__buttons">
        <router-link to="/login"
                     :class="{active: $route.path === '/login'}"
                     class="login__buttons-btn">
            Sign In
        </router-link>

        <router-link to="/register"
                     :class="{active: $route.path === '/register'}"
                     class="login__buttons-btn">
            Sign Up
        </router-link>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>