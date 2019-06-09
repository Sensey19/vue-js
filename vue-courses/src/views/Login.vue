<template>
    <div>
        <authorization v-if="!show"></authorization>
        <profile v-else></profile>
    </div>
</template>

<script>
    import Authorization from '../components/login/Authorization';
    import Profile from '../components/profile/Profile';
    import {mapState} from 'vuex';

    export default {
        computed: {
            ...mapState({
                show: state => state.loginShow
            })
        },
        components: {
            Authorization,
            Profile
        }
    }
</script>

<style lang="scss" scoped>

</style>