<template>
    <aside class="sidebar">
        <Accordion :accordion="accordion"/>
    </aside>
</template>

<script>
import Accordion from "@/components/Accordion";
export default {
    components: {Accordion},
    props: ['accordion']
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.sidebar {
    .sidebar {
        padding-top: 10px;
        padding-bottom: 10px;
    }
}

</style>
