<template>
    <aside class="sidebar">
        <Accordion :accordion="accordion" @checkboxChecked="checkboxChecked"/>
    </aside>
</template>

<script>
import Accordion from "@/components/Accordion";
export default {
    components: {Accordion},
    props: ['accordion'],
    methods: {
        checkboxChecked(checked) {
            this.$emit('checkboxChecked', checked);
        }
    }
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
