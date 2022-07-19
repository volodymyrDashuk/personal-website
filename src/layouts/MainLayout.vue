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
        height: calc(100vh - 55px - 56px);

        @media (max-width: var.$tablet__small) {
            height: auto;
        }

        .content-wrapper {
            height: 100%;
            display: flex;

            .sidebar {
                border-right: 1px solid var.$lines;

                @media (min-width: var.$tablet__small) {
                    min-width: 260px;
                    width: 20%;
                }
            }

            @media (max-width: var.$tablet__small) {
                flex-direction: column;

                .sidebar {
                    max-width: none;
                }
            }
        }
    }
</style>
