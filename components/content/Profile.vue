<script lang="ts" setup>
defineProps({
    img: {
        type: String,
        default: 'person-placeholder.svg',
    },
});
</script>

<template>
    <div class="container">
        <img :src="img" alt="" />
        <div class="text">
            <p class="name"><ContentSlot :use="$slots.name" unwrap="p" /></p>
            <p class="description">
                <ContentSlot :use="$slots.description" unwrap="p" />
            </p>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.container
    display: grid
    grid-template-columns: 4rem 1fr
    gap: 0.75rem

    padding: 1rem
    border-radius: var(--radii-xl)
    border: 1px solid var(--elements-border-primary-static)
    background-color: var(--elements-backdrop-background)

img
    border-radius: 100%
    height: 4rem
    width: 4rem

.name
    font-weight: bold

.description
    font-size: var(--text-sm-fontSize)
    line-height: var(--text-sm-lineHeight)
    font-weight: var(--fontWeight-medium)
    color: var(--elements-text-secondary-color-static)
</style>
