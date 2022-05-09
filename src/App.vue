<template>
    <component :is="layout" />
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/MainLayout'

export default {
    components: {
        EmptyLayout,
        MainLayout
    },
    computed: {
        layout() {
            return (this.$route.meta.layout || 'main') + '-layout'
        }
    }
}
</script>

<style lang="scss">
@import "styles/app.scss";
</style>
