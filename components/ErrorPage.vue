<script lang="ts" setup>
const { error } = defineProps({
    error: {
        type: String,
    },
    message: {
        type: String,
    },
});

useHead({
    title: `Error ${error}`,
});
</script>

<template>
    <div class="errorpage">
        <p class="error">{{ error }}</p>
        <p class="message">{{ message }}</p>
        <NuxtLink to="/">Home</NuxtLink>
    </div>
</template>

<style lang="sass" scoped>
.errorpage
    width: 100%
    height: 100%

    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    gap: 1rem

    font-weight: bold

.error
    margin: -10vmin 0

    padding-right: 1vmin
    padding-bottom: 1vmin

    font-size: 40vmin

    color: var(--color-primary-500)
    text-shadow: 2vmin  2vmin 0.1rem var(--color-primary-800)

a
    padding: 0.75rem 1rem
    border-radius: var(--radii-lg)

    text-decoration: none
    background-color: var(--color-primary-500)
    color: white

    &:hover, &:active, &:focus
        box-shadow: 0.25rem 0.25rem 0.1rem var(--color-primary-800)
        text-shadow: var(--text-shadow)
</style>
