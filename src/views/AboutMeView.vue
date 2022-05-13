<template>
    <div class="about">
        <Sidebar />
        <div class="personal-info">

        </div>
        <div class="code-showcase">

        </div>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
export default {
    components: {Sidebar}
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.about {
    height: 100%;
    display: flex;

    .sidebar {
        flex-basis: 311px;
        border-right: 1px solid var.$lines;
        border-bottom: 1px solid var.$lines;

        @media (max-width: var.$desktop__small) {
            flex-basis: 27%;
        }
    }

    .personal-info {

    }

    .code-showcase {

    }
}


</style>
