<template>
    <div id="app">
        <!-- Page Header -->
        <header-component></header-component>

        <!-- Page Banner -->
        <main-banner></main-banner>

        <router-view/>
        <!-- Footer -->
        <footer-component></footer-component>
    </div>
</template>

<script>
    export default {
        created() {
            const vm = this;
            const jwt = localStorage.token;
            vm.$store.dispatch('jwtChecking', jwt);
        }
    }
</script>

<style lang="scss">
    @import 'assets/main';
</style>
