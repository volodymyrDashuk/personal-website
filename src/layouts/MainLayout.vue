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
@use "src/styles/variables" as var;

    .main-content {
        height: 100%;

        @media (max-width: var.$tablet__small) {
            height: auto;
        }
    }
</style>
