<template>
    <div>
        <authorization v-if="$route.path === '/login'"></authorization>
        <register v-if="$route.path === '/register'"></register>
        <profile v-if="$route.path === '/profile'"></profile>
    </div>
</template>

<script>
    import Authorization from '../components/login/Authorization';
    import Register from '../components/register/Register';
    import Profile from '../components/profile/Profile';

    export default {
        components: {
            Authorization,
            Register,
            Profile
        }
    }
</script>

<style lang="scss" scoped>

</style>