<template>
    <div class="about">
        <Sidebar :accordion="getAboutMe"/>
        <div class="information">
            <router-view/>
        </div>
        <div class="code-showcase">
            <CodeShowcase/>
        </div>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Bio from "@/components/Bio";
import CodeShowcase from "@/components/CodeShowcase";
import {mapGetters} from "vuex";

export default {
    components: {CodeShowcase, Sidebar, Bio},
    computed: {
        ...mapGetters(['getAboutMe'])
    }
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.about {
    height: 100%;
    display: flex;

    .sidebar {
        border-right: 1px solid var.$lines;

        @media (min-width: var.$tablet__small) {
            min-width: 260px;
            width: 20%;
        }
    }

    .information {
        padding: 17px 17px 17px 80px;
        border-right: 1px solid var.$lines;
        overflow-y: scroll;

        @media (min-width: var.$tablet__small) {
            width: 34%;
        }
    }

    .code-showcase {
        padding: 17px 40px;
        overflow-y: scroll;

        @media (min-width: var.$tablet__small) {
            width: 46%;
        }
    }

    @media (max-width: var.$tablet__small) {
        flex-direction: column;

        .sidebar {
            max-width: none;
        }

        .information {
            width: 100%;
            padding: 38px 17px;
            border-right: none;
        }

        .code-showcase {
            width: 100%;
            padding: 38px 17px;
        }
    }
}
</style>
