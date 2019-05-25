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

    }
</script>

<style lang="scss">
    @import 'assets/main';
</style>
