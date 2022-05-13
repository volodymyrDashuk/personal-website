<template>
    <Navigation/>
    <main class="main-content">
        <router-view/>
    </main>
    <Footer/>
</template>

<script>
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default {
    components: {Navigation, Footer}
}
</script>

<style lang="scss">
    .main-content {
        height: 100%;
    }
</style>
