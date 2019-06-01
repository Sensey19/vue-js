<template>
    <header class="masthead" :style="`background-image: url(${$route.meta.img})`">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-10 mx-auto">
                    <div class="site-heading">
                        <h1>{{ $route.meta.title }}</h1>
                        <span class="subheading">{{ $route.meta.subheading }}</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>

</style>