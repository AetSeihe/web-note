<template>
    <div class="wrapper">
        <VHeader />
        <div class="content">
            <slot />
        </div>
        <VFooter />
    </div>
</template>

<script setup>
import VHeader from '@/components/main/VHeader.vue'
import VFooter from '@/components/main/VFooter.vue'
</script>

<style scoped lang="scss">
.wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.content {
    flex: 1;
}
</style>